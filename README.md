# Sort Character

## Problem:

Sort Character

## Input:

One line of words (S).

## Output:

Contains vowel and consonant characters that have been sorted according to the following rules:

-   Sort the letters according to the order they came out.
-   Separate between vowels and consonants.
-   Process as lowercase letters (whitespaces are ignored).

## Test Cases:

| Input                                     | Output                        |
| ----------------------------------------- | ----------------------------- |
| Input one line of words (S) : Sample Case | Vowel Characters : aaee       |
|                                           | Consonant Characters : ssmplc |
| Input one line of words (S) : Next Case   | Vowel Characters : eea        |
|                                           | Consonant Characters : nxtcs  |

# PSBB (Pembatasan Sosial Berskala Besar)

Galih and Ratna married during the COVID-19 period and only invited the families of both partners. They rented a number of minibuses to pick up all of their families to go to the wedding. But during COVID-19, the government held a PSBB program to reduce the impact of the spread of the virus. Each mini bus can only carry at most 4 passengers.

What is the minimum number of buses will they need to rent if all members of each family should ride in the same Busses. (one bus can't take more than two family)

## Input

The first line contains integer `n` — the number of families.
The second line contains a sequence of integers. The integers are separated by a space, each integer is the number of members in the family.

## Output

Print the single number — the minimum number of buses necessary to drive all family to the wedding.
Print "Input must be equal with count of family" if input number of family is not equal with count of family.

## Test Cases:

| Input                                                                                                                    | Output                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| Input the number of families : 5 <br> Input the number of members in the family (separated by a space) : 1 2 4 3 3       | Minimum bus required is : 4              |
| Input the number of families : 8 <br> Input the number of members in the family (separated by a space) : 2 3 4 4 2 1 3 1 | Minimum bus required is : 5              |
| Input the number of families : 5 <br> Input the number of members in the family (separated by a space) : 1 5             | Input must be equal with count of family |
