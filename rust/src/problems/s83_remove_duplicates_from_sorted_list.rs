#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

struct Solution;

impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        match head {
            None => None,
            Some(head) => {
                let tail = Self::delete_duplicates(head.next);
                match &tail {
                    Some(node) if node.val == head.val => tail,
                    _ => Some(Box::new(ListNode {val: head.val, next: tail}))
                }
            },
        }
    }
}

fn create_linked_list(nums: Vec<i32>) -> Option<Box<ListNode>> {
    if nums.is_empty() {
        return None;
    }
    let mut head = Some(Box::new(ListNode::new(nums[0])));
    let mut current = &mut head;
    for num in nums.iter().skip(1) {
        current.as_mut().unwrap().next = Some(Box::new(ListNode::new(*num)));
        current = &mut current.as_mut().unwrap().next;
    }
    head
}

fn parse_linked_list(head: Option<Box<ListNode>>) -> Vec<i32> {
    let mut nums: Vec<i32> = vec![];
    let mut node = head;
    while let Some(n) = node {
        nums.push(n.val);
        node = n.next;
    }
    nums
}

struct Example {
    input: Vec<i32>,
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![Example {
        input: vec![1, 1, 2],
        output: vec![1, 2],
    }, Example {
        input: vec![1, 1, 2, 3, 3],
        output: vec![1, 2, 3],
    }];
    for example in examples {
        let head = create_linked_list(example.input);
        let output = Solution::delete_duplicates(head);
        assert_eq!(create_linked_list(example.output), output);
    }
}
