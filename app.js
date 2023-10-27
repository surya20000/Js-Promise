// create a function and following the progressions inside the function.

let arr = [];

function getData ( ) {
  const getMessage = document.getElementById('message');

  axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    console.log(res.data);

    const result = res.data;

    result.forEach((user) => {
      const getPlayer = document.createElement('div');
      getPlayer.setAttribute('id', 'player');
      getPlayer.setAttribute('class', 'player');
      const name = document.createElement('div');
      const email = document.createElement('div');
      const phone = document.createElement('div');
      const website = document.createElement('div');
      const company = document.createElement('div');
      const city = document.createElement('div');
      const zipcode = document.createElement('div');

      name.innerText = user.name;
      email.innerText = user.email;
      phone.innerText = user.phone;
      website.innerText = user.website;
      company.innerText = user.company.name;
      city.innerText = user.address.city
      zipcode.innerText = user.address.zipcode;

      getPlayer.append(name);
      getPlayer.append(email);
      getPlayer.append(phone);
      getPlayer.append(website);
      getPlayer.append(company);
      getPlayer.append(city);
      getPlayer.append(zipcode);


      arr.push(getPlayer);
    });

    arr.forEach((ele) => {
      getMessage.append(ele);
    });

  })

  .catch((error) => {
    console.log('promise rejected');
    console.log(error.Message)
  });
}

// Progression 1: Create a promise call which fetches data
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
