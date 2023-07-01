function saturdayFun(target = "roller-skate") {
    console.log(`This Saturday, I want to `);
 }
  
  saturdayFun();
  saturdayFun("bathe my dog");

  const mondayWork = function(target = "go to the office") {
   console.log(`This Monday, I will ${target}`);
  };
  
  mondayWork();


  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"
  
 