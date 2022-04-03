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
    pub fn build_tree(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        if preorder.is_empty() || inorder.is_empty() {
            return None;
        }
        let root = Rc::new(RefCell::new(TreeNode::new(preorder[0])));
        let root_index = inorder.iter().position(|&x| x == preorder[0]).unwrap();
        // println!("{} {:?} {:?}", root_index, preorder, inorder);
        root.borrow_mut().left = Self::build_tree(
            preorder[1..=root_index].to_vec(),
            inorder[0..root_index].to_vec(),
        );
        root.borrow_mut().right = Self::build_tree(
            preorder[root_index + 1..].to_vec(),
            inorder[root_index + 1..].to_vec(),
        );
        Some(root)
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
    input: (Vec<i32>, Vec<i32>),
    output: Vec<Option<i32>>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![3, 9, 20, 15, 7], vec![9, 3, 15, 20, 7]),
            output: vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)],
        },
        Example {
            input: (vec![-1], vec![-1]),
            output: vec![Some(-1)],
        },
        Example {
            input: (
                vec![3, 9, 11, 13, 15, 7, 20, 6, 7],
                vec![11, 9, 15, 13, 7, 3, 6, 20, 7],
            ),
            output: vec![
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
        },
        Example {
            input: (vec![], vec![]),
            output: vec![],
        },
    ];
    for example in examples {
        let (preorder, inorder) = example.input;
        let root = create_binary_tree(example.output, 0);
        let output = Solution::build_tree(preorder, inorder);
        assert_eq!(output, root);
    }
}
