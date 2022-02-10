// cancel order
function cancelOrder(e) {
  let confirmation = confirm("Are you sure you want to cancel?");
  if (confirmation === true) {
    // Hide item when order is cancelled
    let btnParent = e.target.parentElement;
    let itemParent = btnParent.previousElementSibling;
    btnParent.style.display = "none";
    itemParent.style.display = "none";
  }
}
// arrow function
let increment = (e) =>{
    let quantity = e.target.previousSibling

}
