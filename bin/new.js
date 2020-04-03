if (!process.argv[2] || !process.argv[3]) {
  console.error("[序号]必填, [名字]必填");
  process.exit(1);
}

const path = require("path");
const fileSave = require("file-save");
const num = (Array(3).join(0) + process.argv[2]).slice(-3);
const name = process.argv[3];
const data = new Date().toLocaleDateString();

const template = `# ${name}

@关键词： 

@题目： 

@题解：

@复杂度分析：

- 时间复杂度：

- 空间复杂度：

@posted by ${data}
`;


fileSave(path.join(path.resolve(__dirname, '../'), `${num}-${name}.md`))
  .write(template, "utf8")
  .end("\n");

console.log('###')