# Testgen

Testgen generates scenarios that **cover more cases** and **run faster** than handwritten tests.

## Features

* High coverage: generate complex scenarios from simple event sequences.
* Fast execution: save intermediate state for branching scenarios.
* Automatic branch pruning: specify stop-conditions to break infinite event sequences.
* Automatic edge case detection: generate event properties from dynamic domains (see below).

## When to use

#### Description 1

1. You have a mission-critical application.
1. You want to ensure it works correctly in all scenarios.
1. You want to write a test suite that covers as many cases as possible.
1. You want to write a test suite that is minimalistic.

#### Description 2

This tool is intended for huge high-load projects, that are extremely sensitive to all unlikely failures and need to be 100% covered by tests.
In such projects the number of tests is dramatically big, because of the amount of various sets of events combinations, that must be tested with different input data.
It takes a lot of time to write such tests and represents very long and monotonous work, during which is really easy to make a mistake and it will be too complex to debug it. 

- Abstraction level for events
- Abstraction level for assertion
- Self defined types with fields of possible values
- No need to write code repeatedly
- Easy formation of event combinations
  
## How it works

1. User defines event names
2. Tool generates empty input and output event handler structures
3. Tool generates event handler function with empty body
4. Tool generates assert handler function with empty body
5. User defines variable types, that will be used in input/output structures
6. User defines variable types field of possible values
7. User defines comparision functions between defined types, if they will be compared and behavior after using default operators is not obvious
8. User implements input/output structures
9. User implements events and assertion handlers
10. User defines possible events combinations
11. Tool generates tests by specified events combinations with all possible sets of input values

## Example

Let's test a bank account functionality, assuming that initial amount on account is zero and both events and assertion handlers will just make HTTP requests to tested application.
To keep the example simple, we will handle only `deposit -> withdrawal` sequence of events.

1. User defines two events:
```
- Deposit 
- Withdrawal
```
2. As a result of tool generation we will have:
```
- Blank input and output structs
- Blank events and assertions handlers
```
3. User defines variable types. In our example we need just integer and float - basic language types 
4. User defines input structures. Both events will have the same structure:
```
- Deposit
  - Account number (integer)
  - Amount (float)
- Withdrawal
  - Account number (integer)
  - Amount (float)
```
5. User defines domains of possible values:
```
- Account numbers: [1001, 1002, 1003]
- Amounts: [1000, 1000.5, 1001]
```
6. User defines event handlers with corresponding HTTP requests (as mentioned in example description)
7. User defines assert handlers with HTTP requests to get current account balance:
```
- Deposit assertion: simple validation, that account balance is equal to deposit amount
- Withdrawal assertion: if account numbers of deposit and withdrawal are not equal or deposit amount is less then withdrawal amount - balance must be equal to deposit amount. Otherwise balance must be equal to difference of deposit amount and withdrawal amount
```
8. User defines events combination - `deposit -> withdrawal`
9. As a result of tool generation we will have 9 tests, that 100% covers tested events combination:
```
d - deposit
w - withdrawal

Test data sets:
1. d.account_number < w.account_number && d.amount < w.amount
2. d.account_number < w.account_number && d.amount == w.amount
3. d.account_number < w.account_number && d.amount > w.amount
4. d.account_number == w.account_number && d.amount < w.amount
5. d.account_number == w.account_number && d.amount == w.amount
6. d.account_number == w.account_number && d.amount > w.amount
7. d.account_number > w.account_number && d.amount < w.amount
8. d.account_number > w.account_number && d.amount == w.amount
9. d.account_number > w.account_number && d.amount > w.amount
```
