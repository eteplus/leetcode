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
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        if root.is_none() {
            return vec![];
        }
        let mut result = vec![];
        let mut queue = vec![root.unwrap()];
        while !queue.is_empty() {
            let mut level = vec![];
            let len = queue.len();
            for _ in 0..len {
                let n = queue.remove(0);
                let node = n.borrow();
                level.push(node.val);
                if let Some(left) = node.left.clone() {
                    queue.push(left);
                }
                if let Some(right) = node.right.clone() {
                    queue.push(right);
                }
            }
            result.push(level);
        }
        result
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
    output: Vec<Vec<i32>>,
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
            output: vec![vec![3], vec![9, 20], vec![11, 13, 6, 7], vec![15, 7]],
        },
        Example {
            input: vec![Some(1), None, Some(2)],
            output: vec![vec![1], vec![2]],
        },
        Example {
            input: vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)],
            output: vec![vec![3], vec![9, 20], vec![15, 7]],
        },
        Example {
            input: vec![Some(5), Some(4), Some(6), None, None, Some(3), Some(7)],
            output: vec![vec![5], vec![4, 6], vec![3, 7]],
        },
    ];
    for example in examples {
        let root = create_binary_tree(example.input, 0);
        let output = Solution::level_order(root);
        assert_eq!(output, example.output);
    }
}
