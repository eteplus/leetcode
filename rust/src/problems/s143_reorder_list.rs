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
    pub fn reorder_list(head: &mut Option<Box<ListNode>>) {
        if head.is_none() {
            return;
        }
        let mut node = head.as_ref();
        let mut len = 0;
        while node.is_some() {
            len += 1;
            node = node.unwrap().next.as_ref();
        }
        let mut curr = head.as_mut();
        for _ in 0..len / 2 {
            curr = curr.unwrap().next.as_mut();
        }
        let mut nodes = vec![];
        let mut curr = curr.unwrap().next.take();
        while curr.is_some() {
            let tmp = curr.as_mut().unwrap().next.take();
            nodes.push(curr);
            curr = tmp;
        }
        let mut curr = head.as_mut().unwrap();
        while let Some(mut node) = nodes.pop() {
            node.as_mut().unwrap().next = curr.next.take();
            curr.next = node;
            curr = curr.next.as_mut().unwrap().next.as_mut().unwrap();
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
    let examples = vec![
        Example {
            input: vec![1, 2, 3, 4, 5],
            output: vec![1, 5, 2, 4, 3],
        },
        Example {
            input: vec![1, 2, 3, 4],
            output: vec![1, 4, 2, 3],
        },
    ];
    for example in examples {
        let mut head = create_linked_list(example.input);
        Solution::reorder_list(&mut head);
        assert_eq!(create_linked_list(example.output), head);
    }
}
