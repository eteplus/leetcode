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
    pub fn reverse_between(
        head: Option<Box<ListNode>>,
        left: i32,
        right: i32,
    ) -> Option<Box<ListNode>> {
        if head.is_none() {
            return head;
        }
        let mut dummy = Some(Box::new(ListNode { val: 0, next: head }));
        let mut previous = &mut dummy;
        for _ in 0..left - 1 {
            previous = &mut previous.as_mut().unwrap().next;
        }
        let mut current = previous.as_mut().unwrap().next.take();
        for _ in left..right {
            let mut temp = current.as_mut().unwrap().next.take();
            current.as_mut().unwrap().next = temp.as_mut().unwrap().next.take();
            temp.as_mut().unwrap().next = previous.as_mut().unwrap().next.take();
            previous.as_mut().unwrap().next = temp;
        }
        while previous.as_ref().unwrap().next.is_some() {
            previous = &mut previous.as_mut().unwrap().next;
        }
        previous.as_mut().unwrap().next = current;
        dummy.unwrap().next
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
    input: (Vec<i32>, i32, i32),
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![Example {
        input: (vec![1, 2, 3, 4, 5], 2, 4),
        output: vec![1, 4, 3, 2, 5],
    }];
    for example in examples {
        let (nums, left, right) = example.input;
        let head = create_linked_list(nums);
        let output = Solution::reverse_between(head, left, right);
        assert_eq!(create_linked_list(example.output), output);
    }
}
