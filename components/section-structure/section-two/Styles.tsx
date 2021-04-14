import styled from '@emotion/styled';

export const Container = styled.div`
  width:25rem;
 .section-structure{
  border:1px solid #ccc;
  margin-bottom:20px;
  cursor: pointer;
  &:last-of-type{
    margin:0;
  }
 }
  .structure-one{
    height:200px;
  }
  .structure-two{
    height:125px;
    padding:10px;
  }
 
  .structure-three{
    padding-top:0.75rem;
    .three-section{
      width:100px;
      .rounded-image{
        width:60px;
        height:60px;
        border-radius:100%;
        border:1px solid #ccc;
        padding:5px;
      }
      .text-xs{
        font-size:0.625rem;
      }
    }
  }

  .structure-four{
    .four-item{
      height:9.375rem;
    }
  }

`;