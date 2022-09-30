function isPalindrome(word=String) {
    wordinv='';
for (i=word.length;i--;i>0)
{
wordinv = wordinv + word.charAt(i);
}
    return wordinv;
    
}
 module.exports = { isPalindrome

 }