# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

#use .odd method which is short for % !== 2
#use if else statement, and include string interpulation in order to get the number to print out

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def oddOrEven (num)
    if num.odd?
        "#{num} is an odd number";
    else
         "#{num} is an even number";
    end
end

p oddOrEven (num1)
p oddOrEven (num2)
p oddOrEven (num3)

#output:
# "7 is an odd number"
# "42 is an even number"
# "221 is an odd number"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# naming the function weHateVowels, use .delete to delete unwanted vowels and return a new string with wanted values

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def weHateVowels(string)
    newString = string.delete ('A, a, E, e, I, i, O, o, U, u')
end

p weHateVowels(beatles_album1)
p weHateVowels(beatles_album2)
p weHateVowels(beatles_album3)

# output:
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


# using the medthod .reverse to reverse the indexs and use if else statement to see if the reversed string is equal to the old string
#after doing that it did not work, I realized that it wouldnt work because it would come out as Racecar == racecaR and the capitalization made it false  for test 1 and test 3 so i added .downcase to lowercase the letters in order to get correct output.

def backwards(string)
    if string.downcase == string.reverse.downcase
        p "#{string} is a palindrome";
    else 
        p "#{string} is not a palindrome";
    end
end

backwards (palindrome_tester1)
backwards (palindrome_tester2)
backwards (palindrome_tester3)

#output:
# "Racecar is a palindrome"
# "LEARN is not a palindrome"
# "Rotator is a palindrome"