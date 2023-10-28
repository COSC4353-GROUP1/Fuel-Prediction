
const form = document.getElementById('profileForm');

const data = {
    username: form.elements['name'].value,
    gender: form.elements['gender'].value,
    address_1: form.elements['address_1'].value,
    address_2: form.elements['address_2'].value,
    city: form.elements['city'].value,
    state: form.elements['state'].value,
    zipCode: form.elements['zipcode'].value,
    phone: form.elements['phone'].value,
  }
    
function cancelEdit() {
    const form = document.getElementById('profileForm');
    
    form.elements['gender'].value= 'male'
    form.elements['address_1'].value= ''
    form.elements['address_2'].value=''
    form.elements['city'].value=''
    form.elements['state'].value=''
    form.elements['zipcode'].value=''
    form.elements['phone'].value=''
}
    
	
	