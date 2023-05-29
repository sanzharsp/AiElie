
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { Card } from 'antd';


const ReadMore = () => {
 

  return (
    <>
    <div style={{padding:10}}>
     <Card title="Веб қосымшаның жұмыс істеу принціпі" >
      <Timeline
    mode="alternate"
    items={[
      {
        children: 'Қазақ тіліндегі қолжазбаны таңдаймыз',
      },
      {
        children: 'Таңдалған қолжазбаны серверге (https://www.pythonanywhere.com/) жүктеледі',
        color: 'green',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: `Серверде жасанды интеллект моделі арқылы өткізіледі`,
      },
      {
        color: 'red',
        children: 'Серверден алынған жауаб, веб қосымшада шығады',
      },
      {
        children: 'Шыққан мән әр қолданушының тарихында сақталады',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: 'Әр бір тарихты қолданушы өшіре алады',
      },
    ]}
  />
  </Card>
  </div>

  <div style={{padding:10}}>

    <Card  title="Қателік процентті қалай білуге болады">
Жасанды интеллект ретінде қолжазба қазақ мәтінін тану дәлдігі тану үшін қолданылатын нақты жүйеге немесе модельге байланысты өзгеруі мүмкін. Алайда, нақты деректерге немесе модельге қол жеткізбестен, қатенің пайызын дәл бағалау мүмкін емес.

Әдетте қолжазбаны танудың дәлдігі келесі факторларға байланысты:<br /><br />

<strong>• Оқыту деректерінің сапасы:</strong> модельді оқыту үшін қолжазба қазақ мәтінінің әртүрлі үлгілері неғұрлым көп пайдаланылса, дәл тану ықтималдығы соғұрлым жоғары болады.<br /><br />

<strong>• Тану моделінің сапасы:</strong> неғұрлым күрделі және жетілдірілген модельдер жоғары тану дәлдігіне ие болуы мүмкін.<br /><br />

<strong>• Мәтіннің күрделілігі:</strong> кейбір мәтіндерді тану қиынырақ болуы мүмкін, әсіресе стандартты емес таңбалар, анық емес қолжазба немесе автоматты түрде тануды қиындататын басқа факторлар болса.<br /><br />

<strong>• Пайдалану контексті:</strong> тану дәлдігі жүйе қолданылатын контекстке байланысты өзгеруі мүмкін. Мысалы, сканерленген кескіндердегі мәтінді тану кезінде немесе сенсорлық экрандар арқылы нақты уақыт режимінде тану кезінде дәлдік әр түрлі болуы мүмкін.<br /><br />

Алайда, жасанды интеллектті қолдана отырып, қолжазбаны танудың заманауи жүйелері дәлдіктің жоғары деңгейіне жетеді. Қатенің нақты пайызы белгілі бір модель мен деректерге байланысты болса да, әдетте дәлдік 90% немесе тіпті 95% - дан жоғары болуы мүмкін.
    </Card>
  </div>
  </>
  )


};
export default ReadMore;