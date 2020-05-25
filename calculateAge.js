function ageCalculator(name,yearofbirth,currentyear)
{
  const age = currentyear - yearofbirth
  return (name + " is " + age + " years old.");
}
  
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));