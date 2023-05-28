const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const inputCoupon = document.querySelector('#coupon');
const result = document.querySelector('#result');
const btn = document.querySelector('#btn');

btn.addEventListener('click', calculateDiscount);

const activeCoupons = {
  FELIZ: 20,
  PRUEBA: 40,
  SUPER: 80,
  SORPRESA: 50,
}

function calculateDiscount() {
  const price = Number(inputPrice.value);
  // const discount = Number(inputDiscount.value);
  const coupon = inputCoupon.value;


  if (!price || !coupon) {
    result.innerText = 'Por favor ingresa los valores requridos';
    return;
  }

  for (let key in activeCoupons) {
    if (key === coupon) {
      const newPrice = (price * (100 - activeCoupons[key])) / 100;
      result.innerText = `El nuevo precio con descuento es ${newPrice}`;
      return;
    }
  }
  
  result.innerText = 'Cupon invalido';
  // if (discount > 100) {
  //   result.innerText = 'Por favor ingresa un descuento valido';
  // }


}