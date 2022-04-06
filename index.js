function newImage(src, position, left, bottom, clickListener) {
  let img = document.createElement('img');
  img.src = src;
  img.style.position = position;
  img.style.left = left;
  img.style.bottom = bottom;
  if (clickListener) {
    img.addEventListener('dblclick', function () {
      img.remove();
    });
  }
  document.body.append(img);
}

newImage('assets/green-character.gif', 'fixed', '100px', '100px', false);
newImage('assets/pine-tree.png', 'fixed', '450px', '200px', false);
newImage('assets/tree.png', 'fixed', '200px', '100px', false);
newImage('assets/crate.png', 'fixed', '150px', '200px', false);
newImage('assets/well.png', 'fixed', '500px', '425px', false);

newImage('assets/sword.png', 'fixed', '500px', '405px', true);
newImage('assets/sheild.png', 'fixed', '165px', '185px', true);
newImage('assets/staff.png', 'fixed', '600px', '100px', true);
