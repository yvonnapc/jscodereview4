export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('forum'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('forum'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('about'),
    this.toRoute('index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
