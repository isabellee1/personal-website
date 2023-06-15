const storySection = document.getElementById('completed-story');
const submitMadLibs = (event) => {
   
    event.preventDefault();
    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);
    console.log(userSubmission);
   
    const story = `
        <h3>Your completed story:</h3>
        <p>I love listening to music because it is such a <span class="inserted-text">${userSubmission.number}</span> way to help me relax. 
        My favorite type of music is jazz and hiphop they are <span class="inserted-text">${userSubmission.adjective_1}</span>! I listen using <span class="inserted-text">${userSubmission.noun_1}</span>, and
        use my <span class="inserted-text"> ${userSubmission.noun_2}</span>.
        I could listen to jazz music all <span class="inserted-text">${userSubmission.noun_3}</span>. One of my favorite music artist
        is Tyler the creator because he makes <span class="inserted-text">${userSubmission.adjective_2}</span> music, with
        <span class="inserted-text">${userSubmission.noun_4} </span> and many other tools, he is able to make such interesting and creative music!
       While I am doing <span class="inserted-text">${userSubmission.sport_1}</span> I like listening to rap music becasue it gets me pumped up!
        While I am eating <span class="inserted-text">${userSubmission.beverage}</span> it is nice to listen to music after a stressful day at school.
         Btw I love eating <span class="inserted-text">${userSubmission.food}</span> and drinking coffee.</p>
    `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');
}
