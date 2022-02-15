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
    pub fn merge_two_lists(
        mut list1: Option<Box<ListNode>>,
        mut list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        if list1.is_none() {
            return list2;
        }
        if list2.is_none() {
            return list1;
        }
        let mut dummy = Some(Box::new(ListNode::new(0)));
        let mut tail = &mut dummy;
        while list1.is_some() && list2.is_some() {
            let val1 = list1.as_ref().unwrap().val;
            let val2 = list2.as_ref().unwrap().val;
            if val1 < val2 {
                tail.as_mut().unwrap().next = Some(Box::new(ListNode::new(val1)));
                list1 = list1.unwrap().next;
            } else {
                tail.as_mut().unwrap().next = Some(Box::new(ListNode::new(val2)));
                list2 = list2.unwrap().next;
            }
            tail = &mut tail.as_mut().unwrap().next;
        }
        if list1.is_some() {
            tail.as_mut().unwrap().next = list1;
        } else if list2.is_some() {
            tail.as_mut().unwrap().next = list2;
        }
        dummy.unwrap().next
    }

    pub fn merge_two_lists_from_recusive(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        match (l1, l2) {
            (None, None) => None,
            (Some(l1), None) => Some(l1),
            (None, Some(l2)) => Some(l2),
            (Some(l1), Some(l2)) => {
                if l1.val < l2.val {
                    let mut l1 = l1;
                    l1.next = Solution::merge_two_lists_from_recusive(l1.next, Some(l2));
                    Some(l1)
                } else {
                    let mut l2 = l2;
                    l2.next = Solution::merge_two_lists_from_recusive(Some(l1), l2.next);
                    Some(l2)
                }
            }
        }
    }
}

struct Example {
    input: (Vec<i32>, Vec<i32>),
    output: Vec<i32>,
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

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 3, 4], vec![1, 2, 4]),
            output: vec![1, 1, 2, 3, 4, 4],
        },
        Example {
            input: (vec![], vec![]),
            output: vec![],
        },
        Example {
            input: (vec![1], vec![]),
            output: vec![1],
        },
        Example {
            input: (vec![], vec![1]),
            output: vec![1],
        },
        Example {
            input: (vec![1, 2, 3, 4, 5], vec![2, 4]),
            output: vec![1, 2, 2, 3, 4, 4, 5],
        },
    ];
    for example in examples {
        let (list1, list2) = example.input;
        let output = Solution::merge_two_lists_from_recusive(create_linked_list(list1), create_linked_list(list2));
        assert_eq!(create_linked_list(example.output), output);
    }
}
