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
    pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        Self::traverse(root, std::i64::MIN, std::i64::MAX)
    }

    pub fn traverse(root: Option<Rc<RefCell<TreeNode>>>, min: i64, max: i64) -> bool {
        match root {
            Some(node) => {
                let node = node.borrow();
                let val = node.val as i64;
                if val <= min || val >= max {
                    return false;
                }
                Self::traverse(node.left.clone(), min, val)
                    && Self::traverse(node.right.clone(), val, max)
            }
            None => true,
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
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![
                Some(5),
                Some(1),
                Some(4),
                None,
                None,
                Some(3),
                Some(6),
            ],
            output: false,
        },
        Example {
            input: vec![Some(2), Some(1), Some(3)],
            output: true,
        },
        Example {
            input: vec![Some(2), Some(2), Some(2)],
            output: false,
        },
        Example {
            input: vec![Some(5), Some(4), Some(6), None, None, Some(3), Some(7)],
            output: false,
        },
        Example {
            input: vec![Some(2147483647)],
            output: true,
        }
    ];
    for example in examples {
        let root = create_binary_tree(example.input, 0);
        let output = Solution::is_valid_bst(root);
        assert_eq!(output, example.output);
    }
}
