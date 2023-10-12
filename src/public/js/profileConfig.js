
const form = document.getElementById('profileForm');

const data = {
    name: form.elements['name'].value,
    gender: form.elements['gender'].value,
    address_1: form.elements['address_1'].value,
    address_2: form.elements['address_2'].value,
    city: form.elements['city'].value,
    state: form.elements['state'].value,
    zipcode: form.elements['zipcode'].value,
    phoneNumber: form.elements['phone'].value,
  }
    
function cancelEdit() {
    const form = document.getElementById('profileForm');
    
      form.reset(); 
}
    
	
	