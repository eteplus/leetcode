use std::cell::RefCell;
use std::rc::Rc;

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

struct Solution;

impl Solution {
    pub fn diameter_of_binary_tree(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut max = 0;
        Solution::traverse(root, &mut max);
        max
    }

    pub fn traverse(node: Option<Rc<RefCell<TreeNode>>>, max: &mut i32) -> i32 {
        match node {
            Some(value) => {
                let node = value.borrow();
                let left_depth = Solution::traverse(node.left.clone(), max);
                let right_depth = Solution::traverse(node.right.clone(), max);
                *max = std::cmp::max(*max, left_depth + right_depth);
                std::cmp::max(left_depth, right_depth) + 1
            }
            None => 0,
        }
    }
}

fn create_binary_tree(nums: Vec<Option<i32>>, index: usize) -> Option<Rc<RefCell<TreeNode>>> {
    if index < nums.len() {
        match nums[index] {
            None => return None,
            Some(val) => {
                let node = Rc::new(RefCell::new(TreeNode::new(val)));
                node.borrow_mut().left = create_binary_tree(nums.clone(), 2 * index + 1);
                node.borrow_mut().right = create_binary_tree(nums.clone(), 2 * index + 2);
                return Some(node);
            }
        }
    }
    None
}

struct Example {
    input: Vec<Option<i32>>,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![
                Some(3),
                Some(9),
                Some(20),
                Some(11),
                Some(13),
                Some(6),
                Some(7),
                None,
                None,
                Some(15),
                Some(7),
            ],
            output: 5,
        },
        Example {
            input: vec![Some(1), None, Some(2)],
            output: 1,
        },
        Example {
            input: vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)],
            output: 3,
        },
        Example {
            input: vec![
                Some(1),
                Some(2),
                Some(3),
                Some(4),
                Some(5),
                Some(6),
                Some(6),
                Some(6),
                Some(6),
            ],
            output: 5,
        },
    ];
    for example in examples {
        let root = create_binary_tree(example.input, 0);
        let output = Solution::diameter_of_binary_tree(root);
        assert_eq!(output, example.output);
    }
}
