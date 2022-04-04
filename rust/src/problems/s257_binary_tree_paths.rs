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
    pub fn binary_tree_paths(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<String> {
        if root.is_none() {
            return vec![];
        }
        let mut paths = vec![];
        let root_val = root.as_ref().unwrap().borrow().val;
        Self::traverse(root, root_val.to_string(), &mut paths);
        paths
    }

    pub fn traverse(
        root: Option<Rc<RefCell<TreeNode>>>,
        path: String,
        paths: &mut Vec<String>,
    ) {
        if let Some(node) = root {
            let left = node.borrow().left.clone();
            let right = node.borrow().right.clone();
            if left.is_none() && right.is_none() {
                paths.push(path.clone());
            }
            if left.is_some() {
                let left_val = left.as_ref().unwrap().borrow().val;
                Self::traverse(left, format!("{}{}{}", path, "->", left_val), paths);
            }
            if right.is_some() {
                let right_val = right.as_ref().unwrap().borrow().val;
                Self::traverse(right, format!("{}{}{}", path, "->", right_val), paths);
            }
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
    output: Vec<String>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![Some(1), Some(2), Some(3), None, Some(5)],
            output: vec!["1->2->5".to_string(), "1->3".to_string()],
        },
        Example {
            input: vec![Some(5), Some(1), Some(4), None, None, Some(3), Some(6)],
            output: vec!["5->1".to_string(), "5->4->3".to_string(), "5->4->6".to_string()],
        },
        Example {
            input: vec![Some(2), Some(1), Some(3)],
            output: vec!["2->1".to_string(), "2->3".to_string()],
        },
        Example {
            input: vec![Some(2), Some(2), Some(2)],
            output: vec!["2->2".to_string(), "2->2".to_string()],
        },
        Example {
            input: vec![Some(5), Some(4), Some(6), None, None, Some(3), Some(7)],
            output: vec!["5->4".to_string(), "5->6->3".to_string(), "5->6->7".to_string()],
        },
    ];
    for example in examples {
        let root = create_binary_tree(example.input, 0);
        let output = Solution::binary_tree_paths(root);
        assert_eq!(output, example.output);
    }
}
