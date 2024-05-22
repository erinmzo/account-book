function Inputs({ onChangeInput, input }) {
  const { date, category, price, content } = input;
  return (
    <>
      <div>
        <label htmlFor="inputDate">날짜</label>
        <input
          type="text"
          id="inputDate"
          name="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <label htmlFor="inputCategory">항목</label>
        <input
          type="text"
          id="inputCategory"
          name="category"
          placeholder="지출 항목"
          value={category}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <label htmlFor="inputPrice">금액</label>
        <input
          type="text"
          id="inputPrice"
          placeholder="지출 금액"
          name="price"
          value={price}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <label htmlFor="inpuContent">내용</label>
        <input
          type="text"
          id="inputContent"
          placeholder="지출 내용"
          name="content"
          value={content}
          onChange={onChangeInput}
        />
      </div>
    </>
  );
}

export default Inputs;
