import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    axios.get('https://dummyjson.com/users')
      .then(response => {
        console.log("1" ,response);
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
console.log("2" ,users)

  return (
     
    
    <div className='card'
    style={{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:"space-around",

      
    }
    }>
       
      
      {
        users.map((item,index)=>{
          console.log("3" ,item)
          return  <>
          <Box sx={{height:"50vh", width:"350px" }}>
          <Card key={index} sx={{ maxWidth: 300, 
          marginBottom: '1rem' ,
          borderRadius: "20px",
          background: "blue",
          height:270}}> 
          

          <CardContent>
            <Typography variant="h5" component="div">
              
              First Name - {item.firstName} 
            </Typography>
            

            
            <Typography variant="body2" color="text.secondary">
            Last Name - {item.lastName}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
           Email Id - {item.email}
            </Typography>

             <Typography variant="body2" color="text.secondary">
            Address - {item.company.address.city}
            </Typography> 

            <Typography variant="body2" color="text.secondary">
            Address 1 - {item.company.address.address}
            </Typography> 

            <Typography variant="body2" color="text.secondary">
            Card Number - {item.bank.cardNumber}
            </Typography> 

            <Typography variant="body2" color="text.secondary">
            Card Type - {item.bank.cardType}
            </Typography> 


            <Typography variant="body2" color="text.secondary">
            Currency - {item.bank.currency}
            </Typography> 

            <Typography variant="body2" color="text.secondary">
            Department - {item.company.department}
            </Typography> 


            <Typography variant="body2" color="text.secondary">
            Gender - {item.gender}
            </Typography> 

            












          </CardContent>
        </Card>
        </Box>

          </>
          
        })
      }
      
      
    </div>
  );
};

export default UserCard;
