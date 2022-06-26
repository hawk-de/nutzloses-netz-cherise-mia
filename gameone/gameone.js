img = [];

let tiles = [];


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
        ug= ug+1;
        tiles[i] = new Tile(x,-48);
   }

   for(i=18;i<=33;i++){
        let x = g*size;
        g= g+1;
        tiles[i] = new Tile(x,-32);
   }

ug =-0.5;
g = 0;

   for(i=34;i<=50;i++){
        let x = ug*size;
        ug= ug+1;
        tiles[i] = new Tile(x,-16);
   }

   for(i=51;i<=66;i++){
        let x = g*size;
        g++;
        tiles[i] = new Tile(x,0);
   }  
   
   ug =-0.5;
   g = 0;

   for(i=67;i<=83;i++){
        let x = ug*size;
        ug++;
        tiles[i] = new Tile(x,row);
   }

   for(i=84;i<=99;i++){
        let x = g*size;
        g++;
        tiles[i] = new Tile(x,row*2);
   }

   ug =-0.5;
   g = 0;
   
      for(i=100;i<=116;i++){
           let x = ug*size;
           ug= ug+1;
           tiles[i] = new Tile(x,row*3);
      }
   
      for(i=117;i<=132;i++){
           let x = g*size;
           g++;
           tiles[i] = new Tile(x,row*4);
      }  
      
      ug =-0.5;
      g = 0;
   
      for(i=133;i<=149;i++){
           let x = ug*size;
           ug++;
           tiles[i] = new Tile(x,row*5);
      }
   
      for(i=150;i<=165;i++){
           let x = g*size;
           g++;
           tiles[i] = new Tile(x,row*6);
      }

      ug =-0.5;
      g = 0;
   
      for(i=166;i<=182;i++){
           let x = ug*size;
           ug++;
           tiles[i] = new Tile(x,row*7);
      }
   
      for(i=183;i<=198;i++){
           let x = g*size;
           g++;
           tiles[i] = new Tile(x,row*8);
      }
   
      ug =-0.5;
      g = 0;
      
         for(i=199;i<=215;i++){
              let x = ug*size;
              ug= ug+1;
              tiles[i] = new Tile(x,row*9);
         }
      
         for(i=216;i<=231;i++){
              let x = g*size;
              g++;
              tiles[i] = new Tile(x,row*10);
         }  
         
         ug =-0.5;
         g = 0;
      
         for(i=232;i<=248;i++){
              let x = ug*size;
              ug++;
              tiles[i] = new Tile(x,row*11);
         }
      
         for(i=249;i<=264;i++){
              let x = g*size;
              g++;
              tiles[i] = new Tile(x,row*12);
         }

         ug =-0.5;
         g = 0;
      
         for(i=265;i<=281;i++){
              let x = ug*size;
              ug++;
              tiles[i] = new Tile(x,row*13);
         }
      
         for(i=282;i<=297;i++){
              let x = g*size;
              g++;
              tiles[i] = new Tile(x,row*14);
         }
      
         ug =-0.5;
         g = 0;
         
            for(i=298;i<=314;i++){
                 let x = ug*size;
                 ug= ug+1;
                 tiles[i] = new Tile(x,row*15);
            }
         
            for(i=315;i<=330;i++){
                 let x = g*size;
                 g++;
                 tiles[i] = new Tile(x,row*16);
            }  
            
            ug =-0.5;
            g = 0;
         
            for(i=331;i<=347;i++){
                 let x = ug*size;
                 ug++;
                 tiles[i] = new Tile(x,row*17);
            }
         
            for(i=348;i<=363;i++){
                 let x = g*size;
                 g++;
                 tiles[i] = new Tile(x,row*18);
            }

            ug =-0.5;
            g = 0;
         
            for(i=364;i<=380;i++){
                 let x = ug*size;
                 ug++;
                 tiles[i] = new Tile(x,row*19);
            }
         
            for(i=381;i<=396;i++){
                 let x = g*size;
                 g++;
                 tiles[i] = new Tile(x,row*20);
            }
         
            ug =-0.5;
            g = 0;
            
               for(i=397;i<=413;i++){
                    let x = ug*size;
                    ug= ug+1;
                    tiles[i] = new Tile(x,row*21);
               }
            
               for(i=414;i<=429;i++){
                    let x = g*size;
                    g++;
                    tiles[i] = new Tile(x,row*22);
               }  
               
               ug =-0.5;
               g = 0;
            
               for(i=430;i<=446;i++){
                    let x = ug*size;
                    ug++;
                    tiles[i] = new Tile(x,row*23);
               }
            
               for(i=447;i<=462;i++){
                    let x = g*size;
                    g++;
                    tiles[i] = new Tile(x,row*24);
               }

               ug =-0.5;
               g = 0;
            
               for(i=463;i<=479;i++){
                    let x = ug*size;
                    ug++;
                    tiles[i] = new Tile(x,row*25);
               }
            
               for(i=480;i<=495;i++){
                    let x = g*size;
                    g++;
                    tiles[i] = new Tile(x,row*26);
               }
            
               ug =-0.5;
               g = 0;
               
                  for(i=496;i<=512;i++){
                       let x = ug*size;
                       ug= ug+1;
                       tiles[i] = new Tile(x,row*27);
                  }
               
                  for(i=513;i<=528;i++){
                       let x = g*size;
                       g++;
                       tiles[i] = new Tile(x,row*28);
                  }  
                  
                  ug =-0.5;
                  g = 0;
               
                  for(i=529;i<=545;i++){
                       let x = ug*size;
                       ug++;
                       tiles[i] = new Tile(x,row*29);
                  }
               
                  for(i=546;i<=561;i++){
                       let x = g*size;
                       g++;
                       tiles[i] = new Tile(x,row*30);
                  }

                  ug =-0.5;
                  g = 0;
               
                  for(i=562;i<=578;i++){
                       let x = ug*size;
                       ug++;
                       tiles[i] = new Tile(x,row*31);
                  }
               
                  for(i=579;i<=594;i++){
                       let x = g*size;
                       g++;
                       tiles[i] = new Tile(x,row*32);
                  }
               
                  ug =-0.5;
                  g = 0;
                  
                     for(i=595;i<=611;i++){
                          let x = ug*size;
                          ug= ug+1;
                          tiles[i] = new Tile(x,row*33);
                     }
                  
                     for(i=612;i<=627;i++){
                          let x = g*size;
                          g++;
                          tiles[i] = new Tile(x,row*34);
                     }  
                     
                     ug =-0.5;
                     g = 0;
                  
                     for(i=628;i<=644;i++){
                          let x = ug*size;
                          ug++;
                          tiles[i] = new Tile(x,row*35);
                     }
                  
                     for(i=645;i<=660;i++){
                          let x = g*size;
                          g++;
                          tiles[i] = new Tile(x,row*36);
                     }

                     ug =-0.5;
                     g = 0;
                  
                     for(i=661;i<=677;i++){
                          let x = ug*size;
                          ug++;
                          tiles[i] = new Tile(x,row*37);
                     }
                  
                     for(i=678;i<=693;i++){
                          let x = g*size;
                          g++;
                          tiles[i] = new Tile(x,row*38);
                     }
                  
                     ug =-0.5;
                     g = 0;
                     
                        for(i=694;i<=710;i++){
                             let x = ug*size;
                             ug= ug+1;
                             tiles[i] = new Tile(x,row*39);
                        }
                     
                        for(i=711;i<=726;i++){
                             let x = g*size;
                             g++;
                             tiles[i] = new Tile(x,row*40);
                        }  
                        
                        ug =-0.5;
                        g = 0;
                     
                        for(i=727;i<=743;i++){
                             let x = ug*size;
                             ug++;
                             tiles[i] = new Tile(x,row*41);
                        }
                     
                        for(i=744;i<=759;i++){
                             let x = g*size;
                             g++;
                             tiles[i] = new Tile(x,row*42);
                        }

                        ug =-0.5;
                        g = 0;
                     
                        for(i=760;i<=776;i++){
                             let x = ug*size;
                             ug++;
                             tiles[i] = new Tile(x,row*43);
                        }
                     
                        for(i=777;i<=792;i++){
                             let x = g*size;
                             g++;
                             tiles[i] = new Tile(x,row*44);
                        }
                     
                        ug =-0.5;
                        g = 0;
                        
                           for(i=793;i<=809;i++){
                                let x = ug*size;
                                ug= ug+1;
                                tiles[i] = new Tile(x,row*45);
                           }
                        
                           for(i=810;i<=825;i++){
                                let x = g*size;
                                g++;
                                tiles[i] = new Tile(x,row*46);
                           }  
                           
                           ug =-0.5;
                           g = 0;
                        
                           for(i=826;i<=842;i++){
                                let x = ug*size;
                                ug++;
                                tiles[i] = new Tile(x,row*47);
                           }
                        
                           for(i=843;i<=858;i++){
                                let x = g*size;
                                g++;
                                tiles[i] = new Tile(x,row*48);
                           }

                           ug =-0.5;
                           g = 0;
                        
                           for(i=859;i<=875;i++){
                                let x = ug*size;
                                ug++;
                                tiles[i] = new Tile(x,row*49);
                           }
                        
                           for(i=876;i<=891;i++){
                                let x = g*size;
                                g++;
                                tiles[i] = new Tile(x,row*50);
                           }
                        
                           ug =-0.5;
                           g = 0;
                           
                              for(i=892;i<=908;i++){
                                   let x = ug*size;
                                   ug= ug+1;
                                   tiles[i] = new Tile(x,row*51);
                              }
                           
                              for(i=909;i<=924;i++){
                                   let x = g*size;
                                   g++;
                                   tiles[i] = new Tile(x,row*52);
                              }  
                              
                              ug =-0.5;
                              g = 0;
                           
                              for(i=925;i<=941;i++){
                                   let x = ug*size;
                                   ug++;
                                   tiles[i] = new Tile(x,row*53);
                              }
                           
                              for(i=942;i<=957;i++){
                                   let x = g*size;
                                   g++;
                                   tiles[i] = new Tile(x,row*54);
                              }

                              ug =-0.5;
                              g = 0;
                           
                              for(i=958;i<=974;i++){
                                   let x = ug*size;
                                   ug++;
                                   tiles[i] = new Tile(x,row*55);
                              }
                           
                              for(i=975;i<=990;i++){
                                   let x = g*size;
                                   g++;
                                   tiles[i] = new Tile(x,row*56);
                              }
                           
                              ug =-0.5;
                              g = 0;
                              
                                 for(i=991;i<=1007;i++){
                                      let x = ug*size;
                                      ug= ug+1;
                                      tiles[i] = new Tile(x,row*57);
                                 }
                              
                                 for(i=1008;i<=1023;i++){
                                      let x = g*size;
                                      g++;
                                      tiles[i] = new Tile(x,row*58);
                                 }  
                                 
                                 ug =-0.5;
                                 g = 0;
                              
                                 for(i=1024;i<=1040;i++){
                                      let x = ug*size;
                                      ug++;
                                      tiles[i] = new Tile(x,row*59);
                                 }
                              
                                 for(i=1041;i<=1056;i++){
                                      let x = g*size;
                                      g++;
                                      tiles[i] = new Tile(x,row*60);
                                 }

                                 ug =-0.5;
                                g = 0;

                                 for(i=1057;i<=1073;i++){
                                        let x = ug*size;
                                        ug++;
                                        tiles[i] = new Tile(x,row*61);
                                   }

                         for(i=1072;i<=1090;i++){
                                        let x = g*size;
                                        g++;
                                        tiles[i] = new Tile(x,row*62);
                                   }

   


   
}

  
  function draw() {

background(220);

 for (let i = 1; i < tiles.length;i++){
 tiles[i].show();
 }


// noFill();





noLoop();



}
