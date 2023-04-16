import { Card } from 'antd';
import { Row, Col, Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Skeleton,Result ,Typography, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { CloseCircleOutlined,DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import './style.css'
const { Paragraph, Text } = Typography;


const Uploads = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState('');
  const [gen, setGen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(false);
  const [mainHistory, setMainHistory] = useState([]);

  useEffect(()=>{
    setMainHistory(JSON.parse(localStorage.getItem('objects'))||[]);
  

  },[history])

  const [api2, contextHolder2] = notification.useNotification();
  const openNotification2 = () => {
    api2.open({
      message: 'Сурет жүктелуі',
      description:
        'Сіз таңдаған сурет жүктелінді, жіберу батырмасын бассаңыз болады',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Күте түрыңыз',
      description:
        'Мен сіздің деректеріңізді мен үйреткен моделден өткізіп жатырмын',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };

  const removeItemFromLocalStorage = (idToRemove) => {
    // Получаем текущий массив объектов из localStorage
    const existingObjects = JSON.parse(localStorage.getItem('objects'));
    
    // Используем метод `filter` для удаления объекта из массива
    const updatedObjects = existingObjects.filter(object => object.Text !== idToRemove);
    
    // Сохраняем обновленный массив объектов в localStorage
    localStorage.setItem('objects', JSON.stringify(updatedObjects));
    setHistory(!history);
  };
  const updateLocalStorage = (object) => {
    // Получаем текущее значение массива из localStorage или создаем новый массив, если его еще нет
    const existingObjects = JSON.parse(localStorage.getItem('objects')) || [];
  
    // Ищем объект в массиве по id
    const index = existingObjects.findIndex((item) => item.Text === object.Text);
  
    // Если объект уже есть в массиве, то обновляем его
    if (index !== -1) {
      existingObjects[index] = object;
    } else {
      // Если объекта еще нет в массиве, то добавляем его
      existingObjects.push(object);
    }
  
    // Сохраняем измененный массив в localStorage
    localStorage.setItem('objects', JSON.stringify(existingObjects));
  }
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
  
  }
  const handleUpload = async () => {
    
    openNotification();
    setLoading(true);
      const formData = new FormData();
      formData.append('file_path', image);
      await axios.post('https://elizatback.pythonanywhere.com/api/v1/image/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res)=>{
          console.log(res.data)
          setData(res.data.Text)
          setLoading(false);
          setGen(true);
          setHistory(!history);
          updateLocalStorage({Text:res.data.Text,})
          console.log('Image uploaded successfully');
         
      }).catch( (error)=>{
      console.error(error);
      setLoading(false);
      console.log('Something went wrong!');
      }
      )
    
  };

  const handleChange = (event) => {
    setImage(event.target.files[0]);
    openNotification2();
  };


  return (
    <>
      {contextHolder2}
      {contextHolder}
    
      <div  style={{padding:10}}>
      <Card 
     
      title="Қолмен жазған текстті болжау"
      extra={<a href="#">More</a>}
  
    >
        <Row justify="center" align="middle">
    
       

      <div className="custom-upload">
      <label htmlFor="file-input">Файлды таңданыз</label>
      <input id="file-input" type="file" onChange={handleChange}  />
      {image && (
        <p>Файл таңдалды: {image.name}</p>
      )}
    </div>
    <div style={{padding:10}}>
    <Row justify="end">
        <Col>
      <Button  type="primary"
          ghost
          icon={<UploadOutlined />}
    
          onClick={handleUpload}
          >
            Жүктеу
            </Button>
            </Col>
      </Row>
      </div>
  
      </Row>
    </Card>
    </div>
    {
      gen
      ?
      <div  style={{padding:10}}>
    <Card
      title="Нәтиже"

  
    >
        <Row justify="center" align="middle">
        <Col>
        <h1>{data}</h1>
      </Col>
      </Row>
 



    </Card>
    </div>
    :
    <></>
}
<div  style={{padding:10}}>
<Card >
<Skeleton loading={loading} active avatar/>
     
      </Card>
      </div>
      <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
      <Breadcrumb.Item>Басты бет</Breadcrumb.Item>
            <Breadcrumb.Item>Болжау</Breadcrumb.Item>
            <Breadcrumb.Item>Болжау тарихы</Breadcrumb.Item>
        
        </Breadcrumb>
      <div  style={{padding:10}}>

      <Card
           title="Тарих"
      >

{
  mainHistory[0] === undefined
  ?
<Result
    status="error"
    title="Тарих"
    subTitle="Тарих салу қателігі"

  >
 
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
        Сізде ешқандай тарих жоқ 
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Біріншіден сіз кез келген қазақша тілде 
        қолмен жазылған <a> суретті таңдап  &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Жіберу
        батырмасын <a>Басыңыз &gt;</a>
      </Paragraph>

  </Result>
 
:
<>

      {mainHistory.map((res)=>
      <div style={{padding:10}}>
      <Card >
        {res.Text} 
      <Row justify="end">
        <Col>
          <Button  type="primary"
          danger
          ghost
          icon={<DeleteOutlined />}
    
          onClick={() => removeItemFromLocalStorage(res.Text)}
          />
        </Col>
      </Row>
      </Card>
      </div>
      )}
      </>
}

      </Card>
      
      </div>
    </>
  );
};
export default Uploads;