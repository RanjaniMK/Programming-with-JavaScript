

    function letterFinder(word, match){

        var condition1= typeof(word)=='string'&& word.length>=2 //DP
        var condition2=typeof(match)=='string'&& match.length==1 //DP
        if(condition1 && condition2){ //DP

        for(i=0;i<word.length;i++){

            if(word[i]==match){
                console.log("Found the", match, "at", i)
            }else {
                console.log("No match found at", i)
            }
        }
    }


else {
    console.log("Please pass correct arguments to the function.")
}
    }
letterFinder(2,3)
letterFinder("cat","t")





