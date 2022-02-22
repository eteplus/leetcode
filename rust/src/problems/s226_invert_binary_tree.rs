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
    pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        if root.is_none() {
            return root;
        }
        fn traverse(node: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
            if node.is_none() {
                return node;
            }
            let n = node.unwrap();
            let mut node = n.borrow_mut();
            let left = traverse(node.left.clone());
            let right = traverse(node.right.clone());
            node.left = right;
            node.right = left;
            Some(n.clone())
        }
        traverse(root)
    }

    pub fn invert_tree_from_stack(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        if root.is_none() {
            return root;
        }
        let mut stack = vec![];
        let result = root.as_ref().unwrap().clone();
        let mut current = root;
        while current.is_some() || !stack.is_empty() {
            while let Some(item) = current {
                stack.push(Some(item.clone()));
                current = item.borrow().left.clone();
            }
            if let Some(Some(node)) = stack.pop() {
                let mut node = node.borrow_mut();
                current = node.right.clone();
                let left = node.left.clone();
                let right = node.right.clone();
                node.left = right;
                node.right = left;
            }
        }
        Some(result)
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
    output: Vec<Option<i32>>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![
                Some(4),
                Some(2),
                Some(7),
                Some(1),
                Some(3),
                Some(6),
                Some(9),
            ],
            output: vec![
                Some(4),
                Some(7),
                Some(2),
                Some(9),
                Some(6),
                Some(3),
                Some(1),
            ],
        },
        Example {
            input: vec![Some(2), Some(1), Some(3)],
            output: vec![Some(2), Some(3), Some(1)],
        },
    ];
    for example in examples {
        let input = create_binary_tree(example.input, 0);
        let output = create_binary_tree(example.output, 0);
        assert_eq!(output, Solution::invert_tree_from_stack(input));
    }
}
