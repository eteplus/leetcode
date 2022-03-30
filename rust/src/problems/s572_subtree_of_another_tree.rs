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
    pub fn is_subtree(
        root: Option<Rc<RefCell<TreeNode>>>,
        sub_root: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        match (root, sub_root) {
            (Some(n), Some(m)) => {
                Self::is_same_tree(Some(n.clone()), Some(m.clone()))
                    || Self::is_subtree(n.borrow().left.clone(), Some(m.clone()))
                    || Self::is_subtree(n.borrow().right.clone(), Some(m))
            }
            (None, None) => true,
            _ => false,
        }
    }

    pub fn is_same_tree(
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        match (p, q) {
            (Some(n), Some(m)) => {
                let node1 = n.borrow();
                let node2 = m.borrow();
                if node1.val != node2.val {
                    return false;
                }
                if !Self::is_same_tree(node1.left.clone(), node2.left.clone()) {
                    return false;
                }
                Self::is_same_tree(node1.right.clone(), node2.right.clone())
            }
            (None, None) => true,
            _ => false,
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
    input: (Vec<Option<i32>>, Vec<Option<i32>>),
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (
                vec![Some(1), Some(2), Some(3)],
                vec![Some(1), Some(2), Some(3)],
            ),
            output: true,
        },
        Example {
            input: (vec![Some(1), Some(1)], vec![Some(1)]),
            output: true,
        },
        Example {
            input: (
                vec![Some(3), Some(4), Some(5), Some(1), Some(2), None, None, None, None, Some(0)],
                vec![Some(4), Some(1), Some(2)],
            ),
            output: false,
        },
        Example {
            input: (
                vec![Some(3), Some(4), Some(5), Some(1), Some(2)],
                vec![Some(4), Some(1), Some(2)],
            ),
            output: true,
        },
    ];
    for example in examples {
        let root = create_binary_tree(example.input.0, 0);
        let sub_root = create_binary_tree(example.input.1, 0);
        assert_eq!(Solution::is_subtree(root, sub_root), example.output);
    }
}
