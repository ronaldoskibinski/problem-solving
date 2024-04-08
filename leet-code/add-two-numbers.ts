/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const string1 = convertToReverseString(l1);
  const string2 = convertToReverseString(l2);

  const sum = BigInt(string1) + BigInt(string2);
  const resultReversed = String(sum).split('').reverse().join('');

  return buildListNode(resultReversed);
}

function convertToReverseString(listNode: ListNode, stringNumber: string = ''): string {
  let resultString = stringNumber + listNode.val;
  return listNode.next
    ? convertToReverseString(listNode.next, resultString)
    : resultString.split('').reverse().join('');
}

function buildListNode(val: string) {
  const newVal = val.substring(1);
  return { val: BigInt(val[0]), next: newVal ? buildListNode(newVal) : null };
}

// [2, 4, 3];
// [5, 6, 4];
// [7, 0, 8];

const listNode1 = {
  val: 2,
  next: { val: 4, next: { val: 3, next: null } },
};

const listNode2 = {
  val: 5,
  next: { val: 6, next: { val: 4, next: null } },
};

const expectedListNode = {
  val: 7,
  next: { val: 0, next: { val: 8, next: null } },
};

addTwoNumbers(listNode1, listNode2);
