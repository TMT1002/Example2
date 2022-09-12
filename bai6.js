
const arr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo','zalo'];

const Count = arr.reduce((t, v) => {t[v] = (t[v] || 0) + 1; return t}, {});  

// truyền giá trị ban đầu cho hàm reduce là một đối tượng rỗng.
// ==> giá trị t trả về là một đối tượng
// ==> kiểm tra thuộc tính v đã có trong đối tượng chưa? Chưa thì gán nó với giá trị đầu tiên là 1
// có thì cộng thêm 1
console.log(Count);

