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
    pub fn kth_smallest(root: Option<Rc<RefCell<TreeNode>>>, mut k: i32) -> i32 {
        if root.is_none() {
            return 0;
        }
        let mut stack = vec![];
        let mut curr = root;
        while curr.is_some() || !stack.is_empty() {
            while let Some(node) = curr {
                stack.push(node.clone());
                curr = node.borrow().left.clone();
            }
            if let Some(node) = stack.pop() {
                k -= 1;
                if k == 0 {
                    return node.borrow().val;
                }
                curr = node.borrow().right.clone();
            }
        }
        0
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
    input: (Vec<Option<i32>>, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![Some(3), Some(1), Some(4), None, Some(2)], 1),
            output: 1,
        },
        Example {
            input: (
                vec![
                    Some(5),
                    Some(3),
                    Some(6),
                    Some(2),
                    Some(4),
                    None,
                    None,
                    Some(1),
                ],
                3,
            ),
            output: 3,
        },
    ];
    for example in examples {
        let root = create_binary_tree(example.input.0, 0);
        let k = example.input.1;
        assert_eq!(Solution::kth_smallest(root, k), example.output);
    }
}
