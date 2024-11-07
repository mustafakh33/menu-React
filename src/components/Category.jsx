import { Row, Col } from "react-bootstrap";
import { Roll } from "react-awesome-reveal";
const Category = ({ filterByCategory, data }) => {
  // [...new set(array)] => بتلغى القيم المتكرره
  const allCategory = ["الكل",...new Set(data.map((item) => item.category))]

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
      <Roll>
       {
        allCategory.length >=1?(
          allCategory.map((category,index) => (
            <div key={index}>
                  <button
                  
                    onClick={() => {
                      filterByCategory(category);
                    }}
                    style={{ border: "1px solid #b45b35" }}
                    className="btn mx-2"
                  >
                    {category}
                  </button>
              </div>
              ))
        ): <h4>لايوجد تصنيفات الان</h4>
       }
       </Roll>
      </Col>
    </Row>
  );
};

export default Category;
