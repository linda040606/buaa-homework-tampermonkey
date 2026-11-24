// ==UserScript==
// @name         工业互联网作业填答
// @namespace    local.course.answers
// @version      1.0
// @description  使用提供的答案填答，核对后提交
// @match        https://icourse.fifedu.com/istp-learning-center/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  'use strict';
  if (window.top !== window.self) return;
  const bank = [{"question": "关于强化学习的特点，以下哪些描述是正确的()", "options": ["强调在没有明确标签的情况下学习", "通常包括奖励和惩罚机制", "适用于解决分类和回归问题", "基于监督学习的模型训练"], "answers": ["强调在没有明确标签的情况下学习", "通常包括奖励和惩罚机制"]}, {"question": "工业互联网标识中的标识码可以用于()", "options": ["标记设备和产品", "管理库存和物流", "记录设备的使用情况和维护信息", "所有选项都是"], "answers": ["所有选项都是"]}, {"question": "1993年，SME给出了CIMS的第三版轮图，该图将顾客作为制造业一切活动的核心，强调了人、组织和()的重要性。", "options": ["协同工作", "沟通", "工具", "信息"], "answers": ["协同工作"]}, {"question": "工业以太网协议的优势之一是什么()", "options": ["低传输速率", "高成本", "实时通信能力", "限制网络拓扑结构"], "answers": ["实时通信能力"]}, {"question": "按仿真粒度可分为：单元级仿真、系统级仿真、和()。", "options": ["复杂仿真", "体系级仿真", "部件级仿真", "组件级仿真"], "answers": ["体系级仿真"]}, {"question": "以下关于代码审计的说法正确的是()", "options": ["检查源代码中的缺点和错误信息", "分析并找到源代码中的缺点和错误信息可能引发的安全漏洞", "提供代码修订措施和建议", "以上都对"], "answers": ["以上都对"]}, {"question": "云计算的概念最早由哪家公司在哪一年提出?()", "options": ["Microsoft,2005", "Google,2006", "Amazon,2007", "IBM,2004"], "answers": ["Google,2006"]}, {"question": "基于传统机器学习的方法利用来学习异常与正常的边界()", "options": ["支持向量机", "逻辑回归", "决策树", "以上都是"], "answers": ["以上都是"]}, {"question": "供应链协同优化的过程不包含()。", "options": ["供应链采购", "供需预测", "问题建模", "子问题分解"], "answers": ["供应链采购"]}, {"question": "哪项技术不是构成元宇宙的关键部分?()", "options": ["增强现实", "虚拟现实", "3D打印", "互联网"], "answers": ["3D打印"]}, {"question": "工业数据空间跨域集成模型的研发设计业务域的核心业务不包括()", "options": ["需求分析", "产品/工艺设计", "产品质量管理", "仿真检验"], "answers": ["产品质量管理"]}, {"question": "在针对事件审计追溯难的工业互联网事件审计追溯管理解决方案中，可以控制链上成员对事件信息的写入和读取权限，实现更灵活事件的信息存储与共享的是()。", "options": ["跨域事件存证可信存储", "实现跨域事件审计追溯", "实现跨域事件存证自动标注更新"], "answers": ["跨域事件存证可信存储"]}, {"question": "工作量证明是一种什么类型的共识机制?()", "options": ["能源高效型", "交易速度优先型", "安全性高的", "能源密集型"], "answers": ["能源密集型"]}, {"question": "针对数据安全共享难的工业互联网数据安全共享管理解决方案的第三步是____。", "options": ["实现跨域事件存证可信存储", "实现跨域事件审计追溯", "跨域事件存证自动标注更新"], "answers": ["跨域事件存证自动标注更新"]}, {"question": "X语言的主要特点是什么?()", "options": ["静态类型检查和强类型化", "动态类型和灵活语法", "面向对象编程和函数式编程的结合", "支持并发编程和分布式计算"], "answers": ["面向对象编程和函数式编程的结合"]}, {"question": "TSN网络中的传输调度器的功能有()", "options": ["控制数据传输路径", "确保传输的数据绝对隐私性", "实现数据备份和存储", "保证数据传输的实时性"], "answers": ["控制数据传输路径", "保证数据传输的实时性"]}, {"question": "在工业互联网标识中，标识载体的常见技术包括()", "options": ["RFID", "QR码", "NFC", "MCU"], "answers": ["RFID", "QR码", "NFC", "MCU"]}, {"question": "西门子数字孪生是一个面向制造全生命周期的数字化概念，它包括()", "options": ["产品数字孪生", "生产数字孪生", "工厂数字孪生", "产线数字孪生"], "answers": ["产品数字孪生", "生产数字孪生", "工厂数字孪生"]}, {"question": "工业元宇宙未来的发展需要()。", "options": ["更加沉浸真实的交互体验", "更低延时的实时通信", "更先进的高性能计算能力", "更全能的工业智能大脑引擎"], "answers": ["更加沉浸真实的交互体验", "更低延时的实时通信", "更先进的高性能计算能力", "更全能的工业智能大脑引擎"]}, {"question": "在通过机器人操作系统控制机器人路径规划时，我们可以在代码中给定机器人的等等()", "options": ["运动终点", "运动轨迹", "运动速度"], "answers": ["运动终点", "运动轨迹", "运动速度"]}, {"question": "6D位姿估计目前主要包括基于的方法。()", "options": ["对应", "模板", "投票"], "answers": ["对应", "模板", "投票"]}, {"question": "工业知识图谱可以提供哪些类型的分析支持()", "options": ["故障诊断分析", "生产效率优化", "风险管理和评估", "员工满意度调查"], "answers": ["故障诊断分析", "生产效率优化", "风险管理和评估"]}, {"question": "边缘计算的核心优势体现在()", "options": ["减少云端数据传输压力", "提高数据处理的实时性和效率", "提供大规模云端存储能力", "解决工业现场低延时、高吞吐量需求"], "answers": ["减少云端数据传输压力", "提高数据处理的实时性和效率", "解决工业现场低延时、高吞吐量需求"]}, {"question": "自适应协同控制技术可以根据()因素的变化，就能自适应调整控制器参数，实现对系统的协同控制。", "options": ["内部", "系统", "外部", "控制输入"], "answers": ["内部", "外部"]}, {"question": "下列哪些因素对工业互联网标识的实施至关重要()", "options": ["标准化", "安全性", "成本效益", "可伸缩性"], "answers": ["标准化", "安全性", "可伸缩性"]}, {"question": "应用进化算法求解工业互联网任务调度问题的优点有()", "options": ["能够求解大规模复杂规划问题", "求解精度高", "实时性好", "局部搜索能力强"], "answers": ["能够求解大规模复杂规划问题", "求解精度高"]}, {"question": "排产调度问题中需要优化的内容包括()", "options": ["生产日程计划", "生产作业计划", "相关资源的现场调配", "生产工艺"], "answers": ["生产日程计划", "生产作业计划", "相关资源的现场调配"]}, {"question": "在分拣过程中，首先需要应用工业物联网技术或计算机视觉技术，通过应用等技术识别和跟踪物品，从而针对物品的种类信息精确分。()", "options": ["条形码", "射频识别", "目标检测", "三维重建"], "answers": ["条形码", "射频识别", "目标检测"]}, {"question": "5G技术在工业互联网中的应用场景主要包括()：", "options": ["设备协同作业", "电子商务平台搭建", "医疗器械研发", "远程设备操控", "网络游戏开发"], "answers": ["设备协同作业", "电子商务平台搭建", "远程设备操控"]}, {"question": "大数据的起源与技术进步和社会变迁紧密相连。()", "options": ["对", "错"], "answers": ["对"]}, {"question": "在打磨过程中，同样需要视觉检测技术来检测打磨后成品的质量。同时，需要物联网中的多类传感器来监测打磨过程，比如磨床中的位移传感器、力传感器等等。()", "options": ["对", "错"], "answers": ["对"]}, {"question": "云计算允许用户降低初始资本支出。()", "options": ["对", "错"], "answers": ["对"]}, {"question": "HLA，也就是高层体系结构，是专门面向分布式仿真系统，设计的一套面向对象的开放架构，以提高各仿真系统之间的互操作性和重用性。()", "options": ["对", "错"], "answers": ["对"]}, {"question": "5G网络的特点之一是窄覆盖范围。()", "options": ["对", "错"], "answers": ["错"]}, {"question": "云制造是我国学者，综合云计算、物联网、服务计算、智能科学等的技术和理念，与制造全生命周期过程深度融合，并针对我国制造业面临的挑战，于2009年提出的一种新型的制造模式，具有数字化、网络化和智能化的典型特征。()", "options": ["对", "错"], "answers": ["对"]}, {"question": "在工业互联网任务调度中，通信任务的主要目标是实现设备之间的物理连接，而不考虑信息交流的实时性。()", "options": ["对", "错"], "answers": ["错"]}, {"question": "基于机器学习技术建立的神经网络模型不可用于仿真。()", "options": ["对", "错"], "answers": ["错"]}, {"question": "现场总线协议的优势之一是大幅减少供电线路需求。()", "options": ["对", "错"], "answers": ["对"]}, {"question": "理想状态下VR需要1.8Gbps，5G和4G网络可以支持。()", "options": ["对", "错"], "answers": ["错"]}, {"question": "在工业生产中常见到一些材质特殊的零件，比如透明或反光的材质，由于表面反射、透光等原因，经常会导致常用的RGB-D相机不能获取物体准确的色彩信息。()", "options": ["对", "错"], "answers": ["错"]}];
  const norm = s => (s || '').replace(/\s+/g, '');
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const button = document.createElement('button');
  button.textContent = '按答案填答并提交';
  button.style.cssText = 'position:fixed;right:24px;top:100px;z-index:2147483647;padding:12px 18px;background:#1677ff;color:white;border:0;border-radius:8px;cursor:pointer';
  document.body.appendChild(button);
  button.onclick = async () => {
    button.disabled = true;
    try {
      const task = new URL(location.href).searchParams.get('stuCwId');
      if (task !== '067c8dca16644d0fb1e8ce3b75611a3a') throw Error('当前页面不是指定作业，请打开原作业链接。');
      const items = [...document.querySelectorAll('.question_list .fif-homework-question-item')];
      if (items.length !== bank.length) throw Error(`页面有 ${items.length} 题，预期 40 题。请等待加载完成。`);
      const used = new Set();
      const plans = items.map((item, index) => {
        const question = norm(item.querySelector('.question_name .editor-content')?.textContent);
        const matches = bank.filter(row => row.question === question);
        if (matches.length !== 1 || used.has(question)) throw Error(`第 ${index+1} 题题干无法唯一匹配。`);
        used.add(question);
        const row = matches[0];
        const labels = [...item.querySelectorAll('label.el-radio, label.el-checkbox')];
        const options = labels.map(label => norm(label.querySelector('.editor-content')?.textContent));
        if (options.length !== row.options.length || new Set(options).size !== options.length || row.options.some(s => !options.includes(s))) throw Error(`第 ${index+1} 题选项发生变化或重复。`);
        const controls = labels.map((label,i) => ({label,input:label.querySelector('input'),wanted:row.answers.includes(options[i])}));
        if (controls.some(c => !c.input || c.input.disabled)) throw Error(`第 ${index+1} 题不可操作。`);
        if (controls.some(c=>c.input.type==='radio') && row.answers.length!==1) throw Error(`第 ${index+1} 题题型不符。`);
        return controls;
      });
      for (let i=0;i<plans.length;i++) {
        button.textContent = `正在填答 ${i+1}/40`;
        for (const c of plans[i]) {
          if (c.input.checked !== c.wanted && (c.input.type === 'checkbox' || c.wanted)) {
            if (!c.input.isConnected) throw Error('页面已重新加载，请重新运行。');
            c.label.click();
            await pause(120);
          }
        }
        if (plans[i].some(c=>!c.input.isConnected || c.input.checked!==c.wanted)) throw Error(`第 ${i+1} 题选择未生效，停止提交。`);
      }
      await pause(500);
      if (plans.flat().some(c=>!c.input.isConnected || c.input.checked!==c.wanted)) throw Error('最终检查未通过，停止提交。');
      const submits=[...document.querySelectorAll('.brn_primary')].filter(el=>el.getClientRects().length && norm(el.textContent)==='提交作答');
      if (submits.length!==1) throw Error('未找到唯一的提交作答按钮。');
      submits[0].click();
      button.textContent = '已点击提交，请查看页面结果';
      alert('40 道题已按提供的答案填入，并已点击“提交作答”。请检查页面是否提交成功；如有确认弹窗，请在页面中确认。');
    } catch (err) {
      button.textContent = '重新检查并填答';
      button.disabled = false;
      alert(err.message);
      console.error(err);
    }
  };
})();
