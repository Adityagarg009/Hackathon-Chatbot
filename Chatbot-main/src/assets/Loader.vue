<template>
  <div class="typing-loader"></div>
</template>

<script>
</script>

<style scoped>
.typing-loader{
    margin: 60px auto;
    width: 6px;
    height: 6px;
    -webkit-animation: line 1s linear infinite alternate;
   -moz-animation: line 1s linear infinite alternate;
   animation: line 1s linear infinite alternate;
}
@-webkit-keyframes line{
    0%{
       
        background-color: rgb(255, 255, 255);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 
                    24px 0px 0px 0px rgba(255, 255, 255, 0.2);
                    
      }
    25%{ 
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,2), 
                    24px 0px 0px 0px rgba(255, 255, 255,0.2);
                    
    }
    75%{ background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,0.2), 
                    24px 0px 0px 0px rgba(255, 255, 255,2);
                   
      }
}

@-moz-keyframes line{
    0%{
       
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,0.2), 
                    24px 0px 0px 0px rgba(255, 255, 255,0.2);
                    
      }
    25%{ 
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,2), 
                    24px 0px 0px 0px rgba(255, 255, 255,0.2);
                    
    }
    75%{ background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,0.2), 
                    24px 0px 0px 0px rgba(255, 255, 255,2);
                   
      }
}

@keyframes line{
    0%{
       
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,0.2), 
                    24px 0px 0px 0px rgba(255, 255, 255,0.2);
                    
      }
    25%{ 
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,2), 
                    24px 0px 0px 0px rgba(255, 255, 255,0.2);
                    
    }
    75%{ background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255,0.2), 
                    24px 0px 0px 0px rgba(255, 255, 255,2);
                   
      }
}
</style>