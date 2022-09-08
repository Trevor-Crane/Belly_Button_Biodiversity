d3.json("samples.json").then(function(data){
    console.log(data);
});

// Find the frequency of weekly belly button washing
d3.json("samples.json").then(function(data) {
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sort the wfreq in descending order
d3.json("samples.json").then(function(data) {
    wfreq = data.metadata.map(person =>
        person.wfreq).sort((a,b) => b - a);
        console.log(wfreq);
});

// Filter out the null values
d3.json("samples.json").then(function(data) {
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

//Display the metadata of the first person in the dataset
d3.json("samples.json").then(function(data) {
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value]) => {console.log(key + ': ' + value);});
});