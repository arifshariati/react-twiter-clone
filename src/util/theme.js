export default 
    {

        palette:{
          primary:{
            light:'#33c9dc',
            main:'#00bcd4',
            dark:'#008394',
            contrastText:'#ffffff'
          },
          secondary:{
            light:'#ff6333',
            main:'#ff3d00',
            dark:'#b22a00',
            contrastText:'#ffffff'
          }
        },
        spreadThis:{
          typography:{
            useNextVariants:true
          },
          form:{
            textAlign:'center'
          },
          logo:{
              width:"5rem",
              margin: "1rem auto 1rem auto"
          },
          pageTitle:{
              margin: "1rem auto 1rem auto"
          },
          textField:{
              margin: "1rem auto 1rem auto"
          },
          button:{
              margin:"2rem auto 1rem auto"
          },
          customError:{
              color:'#d50000',
              fontSize:'0.8rem',
              marginTop:'1rem'
          },
          progress:{
              position: 'absolute'
          },
          invisibleSeperator:{
            border: 'none',
            margin: 4
          },
          visibleSeperator:{
            width:'100%',
            borderBottom:'1px solid rgba(0,0,0,0.1)',
            marginBottom:20          
          },
          paper:{
            padding: 20,
            marginTop:'0rem'
        },
        profile:{
            '& .image-wrapper':{
                textAlign:'center',
                position: 'relative',
                '& button': {
                    position: 'absolute',
                    top: '80%',
                    left: '70%'
                }
            },
            '& .profile-image':{
                width: 200,
                height:200,
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '50%'
            },
            '& .profile-details':{
                textAlign: 'center',
                '& span, svg':{
                    verticalAlign: 'middle'
                },
                '& a':{
                    color: '#00bcd4',
                }
            },
            '& hr': {
                border: 'none',
                margin:'0 0 1rem 0'
            },
            '& svg.button':{
                '&:hover':{
                    cursor: 'pointer'
                }
            }
        },
        buttons:{
            textAlign: 'center',
            '& a':{
                margin: '2rem 1rem'
            }
        }
        }
        
      }
