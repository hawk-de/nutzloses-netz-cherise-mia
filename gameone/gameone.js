img = [];

let bubbles = [];


function preload() {

for ( let i = 0; i < 17; i++) {
img[i] =loadImage(`tiles/tile${i}.png`)
}

}

function setup() {
    createCanvas(1024, 1024);

    let g = 0;
    let ug = -0.5;
    let size = 64
    let row = 16
    
for(i=1;i<=17;i++){
        let x = ug*size;
        ug= ug+1
        bubbles[i] = new Bubble(x,-48);
   }

   for(i=18;i<=33;i++){
        let x = g*size;
        g= g+1;
        bubbles[i] = new Bubble(x,-32);
   }

ug =-0.5;
g = 0;

   for(i=34;i<=50;i++){
        let x = ug*size;
        ug= ug+1;
        bubbles[i] = new Bubble(x,-16);
   }

   for(i=51;i<=66;i++){
        let x = g*size;
        g++;
        bubbles[i] = new Bubble(x,0);
   }  
   
   ug =-0.5;
   g = 0;

   for(i=67;i<=83;i++){
        let x = ug*size;
        ug++;
        bubbles[i] = new Bubble(x,row);
   }

   for(i=84;i<=99;i++){
        let x = g*size;
        g++;
        bubbles[i] = new Bubble(x,row*2);
   }

   ug =-0.5;
   g = 0;
   
      for(i=100;i<=116;i++){
           let x = ug*size;
           ug= ug+1;
           bubbles[i] = new Bubble(x,row*3);
      }
   
      for(i=117;i<=;i++){
           let x = g*size;
           g++;
           bubbles[i] = new Bubble(x,row*4);
      }  
      
      ug =-0.5;
      g = 0;
   
      for(i=133;i<=;i++){
           let x = ug*size;
           ug++;
           bubbles[i] = new Bubble(x,row*5);
      }
   
      for(i=150;i<=;i++){
           let x = g*size;
           g++;
           bubbles[i] = new Bubble(x,row*6);
      }

      ug =-0.5;
      g = 0;
   
      for(i=166;i<=;i++){
           let x = ug*size;
           ug++;
           bubbles[i] = new Bubble(x,row*7);
      }
   
      for(i=183;i<=99;i++){
           let x = g*size;
           g++;
           bubbles[i] = new Bubble(x,row*8);
      }
   
      ug =-0.5;
      g = 0;
      
         for(i=199;i<=;i++){
              let x = ug*size;
              ug= ug+1;
              bubbles[i] = new Bubble(x,row*9);
         }
      
         for(i=216;i<=;i++){
              let x = g*size;
              g++;
              bubbles[i] = new Bubble(x,row*10);
         }  
         
         ug =-0.5;
         g = 0;
      
         for(i=232;i<=;i++){
              let x = ug*size;
              ug++;
              bubbles[i] = new Bubble(x,row*11);
         }
      
         for(i=249;i<=;i++){
              let x = g*size;
              g++;
              bubbles[i] = new Bubble(x,row*12);
         }

         ug =-0.5;
         g = 0;
      
         for(i=265;i<=;i++){
              let x = ug*size;
              ug++;
              bubbles[i] = new Bubble(x,row*13);
         }
      
         for(i=282;i<=;i++){
              let x = g*size;
              g++;
              bubbles[i] = new Bubble(x,row*14);
         }
      
         ug =-0.5;
         g = 0;
         
            for(i=298;i<=;i++){
                 let x = ug*size;
                 ug= ug+1;
                 bubbles[i] = new Bubble(x,row*15);
            }
         
            for(i=315;i<=;i++){
                 let x = g*size;
                 g++;
                 bubbles[i] = new Bubble(x,row*16);
            }  
            
            ug =-0.5;
            g = 0;
         
            for(i=331;i<=;i++){
                 let x = ug*size;
                 ug++;
                 bubbles[i] = new Bubble(x,row*17);
            }
         
            for(i=348;i<=;i++){
                 let x = g*size;
                 g++;
                 bubbles[i] = new Bubble(x,row*18);
            }

            ug =-0.5;
            g = 0;
         
            for(i=364;i<=;i++){
                 let x = ug*size;
                 ug++;
                 bubbles[i] = new Bubble(x,row*19);
            }
         
            for(i=84;i<=99;i++){
                 let x = g*size;
                 g++;
                 bubbles[i] = new Bubble(x,row*20);
            }
         
            ug =-0.5;
            g = 0;
            
               for(i=;i<=;i++){
                    let x = ug*size;
                    ug= ug+1;
                    bubbles[i] = new Bubble(x,row*21);
               }
            
               for(i=;i<=;i++){
                    let x = g*size;
                    g++;
                    bubbles[i] = new Bubble(x,row*22);
               }  
               
               ug =-0.5;
               g = 0;
            
               for(i=;i<=;i++){
                    let x = ug*size;
                    ug++;
                    bubbles[i] = new Bubble(x,row*23);
               }
            
               for(i=84;i<=99;i++){
                    let x = g*size;
                    g++;
                    bubbles[i] = new Bubble(x,row*24);
               }

               ug =-0.5;
               g = 0;
            
               for(i=67;i<=83;i++){
                    let x = ug*size;
                    ug++;
                    bubbles[i] = new Bubble(x,row*25);
               }
            
               for(i=84;i<=99;i++){
                    let x = g*size;
                    g++;
                    bubbles[i] = new Bubble(x,row*26);
               }
            
               ug =-0.5;
               g = 0;
               
                  for(i=100;i<=;i++){
                       let x = ug*size;
                       ug= ug+1;
                       bubbles[i] = new Bubble(x,row*27);
                  }
               
                  for(i=117;i<=;i++){
                       let x = g*size;
                       g++;
                       bubbles[i] = new Bubble(x,row*28);
                  }  
                  
                  ug =-0.5;
                  g = 0;
               
                  for(i=133;i<=;i++){
                       let x = ug*size;
                       ug++;
                       bubbles[i] = new Bubble(x,row*29);
                  }
               
                  for(i=84;i<=99;i++){
                       let x = g*size;
                       g++;
                       bubbles[i] = new Bubble(x,row*30);
                  }

                  ug =-0.5;
                  g = 0;
               
                  for(i=67;i<=83;i++){
                       let x = ug*size;
                       ug++;
                       bubbles[i] = new Bubble(x,row*31);
                  }
               
                  for(i=84;i<=99;i++){
                       let x = g*size;
                       g++;
                       bubbles[i] = new Bubble(x,row*32);
                  }
               
                  ug =-0.5;
                  g = 0;
                  
                     for(i=;i<=;i++){
                          let x = ug*size;
                          ug= ug+1;
                          bubbles[i] = new Bubble(x,row*33);
                     }
                  
                     for(i=;i<=;i++){
                          let x = g*size;
                          g++;
                          bubbles[i] = new Bubble(x,row*34);
                     }  
                     
                     ug =-0.5;
                     g = 0;
                  
                     for(i=;i<=;i++){
                          let x = ug*size;
                          ug++;
                          bubbles[i] = new Bubble(x,row*35);
                     }
                  
                     for(i=84;i<=99;i++){
                          let x = g*size;
                          g++;
                          bubbles[i] = new Bubble(x,row*36);
                     }

                     ug =-0.5;
                     g = 0;
                  
                     for(i=67;i<=83;i++){
                          let x = ug*size;
                          ug++;
                          bubbles[i] = new Bubble(x,row*37);
                     }
                  
                     for(i=84;i<=99;i++){
                          let x = g*size;
                          g++;
                          bubbles[i] = new Bubble(x,row*38);
                     }
                  
                     ug =-0.5;
                     g = 0;
                     
                        for(i=;i<=;i++){
                             let x = ug*size;
                             ug= ug+1;
                             bubbles[i] = new Bubble(x,row*39);
                        }
                     
                        for(i=;i<=;i++){
                             let x = g*size;
                             g++;
                             bubbles[i] = new Bubble(x,row*40);
                        }  
                        
                        ug =-0.5;
                        g = 0;
                     
                        for(i=;i<=;i++){
                             let x = ug*size;
                             ug++;
                             bubbles[i] = new Bubble(x,row*41);
                        }
                     
                        for(i=84;i<=99;i++){
                             let x = g*size;
                             g++;
                             bubbles[i] = new Bubble(x,row*42);
                        }

                        ug =-0.5;
                        g = 0;
                     
                        for(i=67;i<=83;i++){
                             let x = ug*size;
                             ug++;
                             bubbles[i] = new Bubble(x,row*43);
                        }
                     
                        for(i=84;i<=99;i++){
                             let x = g*size;
                             g++;
                             bubbles[i] = new Bubble(x,row*44);
                        }
                     
                        ug =-0.5;
                        g = 0;
                        
                           for(i=;i<=;i++){
                                let x = ug*size;
                                ug= ug+1;
                                bubbles[i] = new Bubble(x,row*45);
                           }
                        
                           for(i=;i<=;i++){
                                let x = g*size;
                                g++;
                                bubbles[i] = new Bubble(x,row*46);
                           }  
                           
                           ug =-0.5;
                           g = 0;
                        
                           for(i=;i<=;i++){
                                let x = ug*size;
                                ug++;
                                bubbles[i] = new Bubble(x,row*47);
                           }
                        
                           for(i=84;i<=99;i++){
                                let x = g*size;
                                g++;
                                bubbles[i] = new Bubble(x,row*48);
                           }

                           ug =-0.5;
                           g = 0;
                        
                           for(i=67;i<=83;i++){
                                let x = ug*size;
                                ug++;
                                bubbles[i] = new Bubble(x,row*49);
                           }
                        
                           for(i=84;i<=99;i++){
                                let x = g*size;
                                g++;
                                bubbles[i] = new Bubble(x,row*50);
                           }
                        
                           ug =-0.5;
                           g = 0;
                           
                              for(i=;i<=;i++){
                                   let x = ug*size;
                                   ug= ug+1;
                                   bubbles[i] = new Bubble(x,row*51);
                              }
                           
                              for(i=;i<=;i++){
                                   let x = g*size;
                                   g++;
                                   bubbles[i] = new Bubble(x,row*52);
                              }  
                              
                              ug =-0.5;
                              g = 0;
                           
                              for(i=;i<=;i++){
                                   let x = ug*size;
                                   ug++;
                                   bubbles[i] = new Bubble(x,row*53);
                              }
                           
                              for(i=84;i<=99;i++){
                                   let x = g*size;
                                   g++;
                                   bubbles[i] = new Bubble(x,row*54);
                              }

                              ug =-0.5;
                              g = 0;
                           
                              for(i=67;i<=83;i++){
                                   let x = ug*size;
                                   ug++;
                                   bubbles[i] = new Bubble(x,row*55);
                              }
                           
                              for(i=84;i<=99;i++){
                                   let x = g*size;
                                   g++;
                                   bubbles[i] = new Bubble(x,row*56);
                              }
                           
                              ug =-0.5;
                              g = 0;
                              
                                 for(i=;i<=;i++){
                                      let x = ug*size;
                                      ug= ug+1;
                                      bubbles[i] = new Bubble(x,row*57);
                                 }
                              
                                 for(i=;i<=;i++){
                                      let x = g*size;
                                      g++;
                                      bubbles[i] = new Bubble(x,row*58);
                                 }  
                                 
                                 ug =-0.5;
                                 g = 0;
                              
                                 for(i=;i<=;i++){
                                      let x = ug*size;
                                      ug++;
                                      bubbles[i] = new Bubble(x,row*59);
                                 }
                              
                                 for(i=84;i<=99;i++){
                                      let x = g*size;
                                      g++;
                                      bubbles[i] = new Bubble(x,row*60);
                                 }

                                 ug =-0.5;
                                 g = 0;
                              
                                 for(i=67;i<=83;i++){
                                      let x = ug*size;
                                      ug++;
                                      bubbles[i] = new Bubble(x,row*61);
                                 }
                              
                                 for(i=84;i<=99;i++){
                                      let x = g*size;
                                      g++;
                                      bubbles[i] = new Bubble(x,row*62);
                                 }
                              
                                 ug =-0.5;
                                 g = 0;
                                 
                                    for(i=;i<=;i++){
                                         let x = ug*size;
                                         ug= ug+1;
                                         bubbles[i] = new Bubble(x,row*63);
                                    }
                                 
                                    for(i=;i<=;i++){
                                         let x = g*size;
                                         g++;
                                         bubbles[i] = new Bubble(x,row*64);
                                    }  
                                    
                                    ug =-0.5;
                                    g = 0;
                                 
                                    for(i=;i<=;i++){
                                         let x = ug*size;
                                         ug++;
                                         bubbles[i] = new Bubble(x,row);
                                    }
                                 
                                    for(i=84;i<=99;i++){
                                         let x = g*size;
                                         g++;
                                         bubbles[i] = new Bubble(x,row);
                                    }




   
}

  
  function draw() {

 //let ya = 16
 //let size = size

background(220);

 for (let i = 1; i < bubbles.length;i++){
 bubbles[i].show();
 }


// noFill();

//for (let x = -0.5; x < 16; x++) {image(random(img),x*size, -48 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,-32, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, -16 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,0, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*2, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*3 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*4, size, size);}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*5 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*6, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*7 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*8, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*9 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*10, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*11 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*12, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*13 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*14, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*15 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*16, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*17 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*18, size, size);}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*19 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*20, size, size);}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*21 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*22, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*23 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*24, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*25 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*26, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*27 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*28, size, size);}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*29 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*30, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*31 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*32, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*33 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*34, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*35 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*36, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*37 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*38, size, size);}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*39 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*40, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*41 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*42, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*43 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*44, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*45 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*46, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*47 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*48, size, size);}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*49 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*50, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*51 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*52, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*53 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*54, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*55 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*56, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*57 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*58, size, size);}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*59 , size, size)}

//     for (let x = 0; x < 16; x++) {image(random(img),x*size,ya*60, size, size)}

// for (let x = -0.5; x < 16; x++) {image(random(img),x*size, ya*61 , size, size)}




noLoop();



}
