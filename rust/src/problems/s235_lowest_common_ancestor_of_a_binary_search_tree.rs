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
    pub fn lowest_common_ancestor(
        root: Option<Rc<RefCell<TreeNode>>>,
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> Option<Rc<RefCell<TreeNode>>> {
        match (root, p, q) {
            (Some(n), Some(l), Some(r)) => {
                if l.borrow().val < n.borrow().val && r.borrow().val < n.borrow().val {
                    Self::lowest_common_ancestor(n.borrow().left.clone(), Some(l), Some(r))
                } else if l.borrow().val > n.borrow().val && r.borrow().val > n.borrow().val {
                    Self::lowest_common_ancestor(n.borrow().right.clone(), Some(l), Some(r))
                } else {
                    Some(n)
                }
            }
            _ => None,
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

fn find_node(root: &Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
    if let Some(node) = root {
        if node.borrow().val == val {
            return Some(node.clone());
        }
        let left = find_node(&node.borrow().left.clone(), val);
        if let Some(left) = left {
            return Some(left);
        }
        let right = find_node(&node.borrow().right.clone(), val);
        if let Some(right) = right {
            return Some(right);
        }
    }
    None
}

struct Example {
    input: (Vec<Option<i32>>, i32, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (
                vec![
                    Some(6),
                    Some(2),
                    Some(8),
                    Some(0),
                    Some(4),
                    Some(7),
                    Some(9),
                    None,
                    None,
                    Some(3),
                    Some(5),
                ],
                2,
                8,
            ),
            output: 6,
        },
        Example {
            input: (
                vec![
                    Some(6),
                    Some(2),
                    Some(8),
                    Some(0),
                    Some(4),
                    Some(7),
                    Some(9),
                    None,
                    None,
                    Some(3),
                    Some(5),
                ],
                2,
                4,
            ),
            output: 2,
        },
        Example {
            input: (vec![Some(2), Some(1)], 2, 1),
            output: 2,
        },
    ];
    for example in examples {
        let root = create_binary_tree(example.input.0, 0);
        let p = find_node(&root, example.input.1);
        let q = find_node(&root, example.input.2);
        let result = find_node(&root, example.output);
        assert_eq!(
            Solution::lowest_common_ancestor(root, p, q),
            result
        );
    }
}
