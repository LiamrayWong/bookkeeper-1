let id = parseInt(window.localStorage.getItem('iMax') || '0')
console.log('id=0')
const createId = ():number => {
  id += 1
  window.localStorage.setItem('iMax',JSON.stringify(id))
  return id
};

export {createId}