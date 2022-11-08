const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seed = document.getElementsByClassName("seed");
    console.log(seed);

    // 2. Get all seedless fruit elements
    // Your code here
    // const seedless = document.getElementsByClassName("seedless");
    const seedless = document.querySelectorAll("li.seedless");
    console.log(seedless);

    // 3. Get first seedless fruit element
    // Your code here
    // const firstSeedless = document.getElementsByClassName("seedless")[0];
    const firstSeedless = document.querySelector("li.seedless");
    console.log(firstSeedless);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const spanTextYou = document.getElementsByTagName('span')[0].innerText;
    console.log(spanTextYou);

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperChildren = document.getElementById("wrapper").children;
    console.log(wrapperChildren);

    // 6. Get all odd number list items in the list
    // Your code here
    const oddElement = document.querySelectorAll(".odd");
    console.log(oddElement);

    const oddList = [];
    oddElement.forEach(el => {
        oddList.push(el.innerText);
    });
    console.log(oddList);

    // 7. Get all even number list items in the list
    // Your code here
    const olElement = Array.from(document.getElementsByTagName("ol")[0].children);
    console.log(olElement);

    const evenList = [];
    olElement.forEach(el => {
        if (el.className !== "odd") {
            evenList.push(el.innerText);
        }
    });
    console.log(evenList);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const aElement = document.querySelectorAll("#three > p > a");
    console.log(aElement);

    const techCompanies = Array.from(aElement).filter(el => !el.className);
    console.log(techCompanies);

    // 9. Get "Amazon" list element
    // Your code here
    const amazonElements = document.getElementsByClassName("shopping");
    console.log(amazonElements);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicornElements = document.querySelectorAll("#three > ul > li");
    console.log(unicornElements);
}

window.onload = select;
