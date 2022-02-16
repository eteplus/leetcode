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
    pub fn preorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        if root.is_none() {
            return vec![];
        }
        fn traverse(node: Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>) {
            if node.is_none() {
                return;
            }
            if let Some(n) = node {
                let node = n.borrow();
                result.push(node.val);
                traverse(node.left.clone(), result);
                traverse(node.right.clone(), result);
            }
        }
        let mut result: Vec<i32> = vec![];
        traverse(root, &mut result);
        result
    }

    pub fn preorder_traversal_from_stack(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        if root.is_none() {
            return vec![];
        }
        let mut stack = vec![root];
        let mut result: Vec<i32> = vec![];
        while let Some(item) = stack.pop() {
            if let Some(value) = item {
                let node = value.borrow();
                result.push(node.val);
                stack.push(node.right.clone());
                stack.push(node.left.clone());
            }
        }
        result
    }

    pub fn preorder_traversal_from_stack_two(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        if root.is_none() {
            return vec![];
        }
        let mut stack = vec![];
        let mut result: Vec<i32> = vec![];
        let mut current = root;
        while current.is_some() || !stack.is_empty() {
            while let Some(item) = current {
                let node = item.borrow();
                result.push(node.val);
                stack.push(node.right.clone());
                current = node.left.clone();
            }
            if let Some(item) = stack.pop() {
                current = item;
            }
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
    output: Vec<i32>,
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
            output: vec![3, 9, 11, 13, 15, 7, 20, 6, 7],
        },
        Example {
            input: vec![Some(1), None, Some(2)],
            output: vec![1, 2],
        },
        Example {
            input: vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)],
            output: vec![3, 9, 20, 15, 7],
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
            output: vec![1, 2, 4, 6, 6, 5, 3, 6, 6],
        },
    ];
    for example in examples {
        let root = create_binary_tree(example.input, 0);
        let output = Solution::preorder_traversal_from_stack_two(root);
        assert_eq!(output, example.output);
    }
}
