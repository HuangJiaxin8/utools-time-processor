// 常用时区列表（完整版）
const COMMON_TIMEZONES = [
  // 中国及港澳台
  { value: 'Asia/Shanghai', label: '中国标准时间 (北京/上海)' },
  { value: 'Asia/Chongqing', label: '中国标准时间 (重庆)' },
  { value: 'Asia/Hong_Kong', label: '香港时间' },
  { value: 'Asia/Macau', label: '澳门时间' },
  { value: 'Asia/Taipei', label: '台北时间' },

  // 亚洲其他地区
  { value: 'Asia/Tokyo', label: '日本标准时间 (东京)' },
  { value: 'Asia/Seoul', label: '韩国标准时间 (首尔)' },
  { value: 'Asia/Singapore', label: '新加坡时间' },
  { value: 'Asia/Kuala_Lumpur', label: '马来西亚时间 (吉隆坡)' },
  { value: 'Asia/Bangkok', label: '泰国时间 (曼谷)' },
  { value: 'Asia/Jakarta', label: '印尼时间 (雅加达)' },
  { value: 'Asia/Manila', label: '菲律宾时间 (马尼拉)' },
  { value: 'Asia/Ho_Chi_Minh', label: '越南时间 (胡志明市)' },
  { value: 'Asia/Hanoi', label: '越南时间 (河内)' },
  { value: 'Asia/Rangoon', label: '缅甸时间 (仰光)' },
  { value: 'Asia/Kolkata', label: '印度时间 (加尔各答/孟买)' },
  { value: 'Asia/Dhaka', label: '孟加拉时间 (达卡)' },
  { value: 'Asia/Karachi', label: '巴基斯坦时间 (卡拉奇)' },
  { value: 'Asia/Dubai', label: '阿联酋时间 (迪拜)' },
  { value: 'Asia/Riyadh', label: '沙特时间 (利雅得)' },
  { value: 'Asia/Tehran', label: '伊朗时间 (德黑兰)' },
  { value: 'Asia/Kuwait', label: '科威特时间' },
  { value: 'Asia/Bahrain', label: '巴林时间' },
  { value: 'Asia/Qatar', label: '卡塔尔时间' },
  { value: 'Asia/Jerusalem', label: '以色列时间 (耶路撒冷)' },

  // 欧洲地区
  { value: 'Europe/London', label: '格林威治时间 (伦敦)' },
  { value: 'Europe/Paris', label: '中欧时间 (巴黎)' },
  { value: 'Europe/Berlin', label: '中欧时间 (柏林)' },
  { value: 'Europe/Rome', label: '中欧时间 (罗马)' },
  { value: 'Europe/Madrid', label: '中欧时间 (马德里)' },
  { value: 'Europe/Amsterdam', label: '中欧时间 (阿姆斯特丹)' },
  { value: 'Europe/Brussels', label: '中欧时间 (布鲁塞尔)' },
  { value: 'Europe/Vienna', label: '中欧时间 (维也纳)' },
  { value: 'Europe/Zurich', label: '中欧时间 (苏黎世)' },
  { value: 'Europe/Stockholm', label: '中欧时间 (斯德哥尔摩)' },
  { value: 'Europe/Copenhagen', label: '中欧时间 (哥本哈根)' },
  { value: 'Europe/Helsinki', label: '东欧时间 (赫尔辛基)' },
  { value: 'Europe/Athens', label: '东欧时间 (雅典)' },
  { value: 'Europe/Moscow', label: '莫斯科时间' },
  { value: 'Europe/Istanbul', label: '土耳其时间 (伊斯坦布尔)' },
  { value: 'Europe/Prague', label: '中欧时间 (布拉格)' },
  { value: 'Europe/Warsaw', label: '中欧时间 (华沙)' },
  { value: 'Europe/Budapest', label: '中欧时间 (布达佩斯)' },

  // 美洲地区
  { value: 'America/New_York', label: '美东时间 (纽约/华盛顿)' },
  { value: 'America/Washington', label: '美东时间 (华盛顿特区)' },
  { value: 'America/Boston', label: '美东时间 (波士顿)' },
  { value: 'America/Philadelphia', label: '美东时间 (费城)' },
  { value: 'America/Miami', label: '美东时间 (迈阿密)' },
  { value: 'America/Atlanta', label: '美东时间 (亚特兰大)' },
  { value: 'America/Chicago', label: '美中时间 (芝加哥)' },
  { value: 'America/Detroit', label: '美东时间 (底特律)' },
  { value: 'America/Minneapolis', label: '美中时间 (明尼阿波利斯)' },
  { value: 'America/Denver', label: '美山地时间 (丹佛)' },
  { value: 'America/Phoenix', label: '美山地时间 (凤凰城)' },
  { value: 'America/Los_Angeles', label: '美西时间 (洛杉矶)' },
  { value: 'America/San_Francisco', label: '美西时间 (旧金山)' },
  { value: 'America/Seattle', label: '美西时间 (西雅图)' },
  { value: 'America/Las_Vegas', label: '美西时间 (拉斯维加斯)' },
  { value: 'America/Vancouver', label: '美西时间 (温哥华)' },
  { value: 'America/Toronto', label: '美东时间 (多伦多)' },
  { value: 'America/Montreal', label: '美东时间 (蒙特利尔)' },
  { value: 'America/Mexico_City', label: '墨西哥中部时间 (墨西哥城)' },
  { value: 'America/Sao_Paulo', label: '巴西时间 (圣保罗)' },
  { value: 'America/Buenos_Aires', label: '阿根廷时间 (布宜诺斯艾利斯)' },
  { value: 'America/Lima', label: '秘鲁时间 (利马)' },
  { value: 'America/Bogota', label: '哥伦比亚时间 (波哥大)' },
  { value: 'America/Caracas', label: '委内瑞拉时间 (加拉加斯)' },
  { value: 'America/Santiago', label: '智利时间 (圣地亚哥)' },

  // 大洋洲地区
  { value: 'Australia/Sydney', label: '澳大利亚东部时间 (悉尼)' },
  { value: 'Australia/Melbourne', label: '澳大利亚东部时间 (墨尔本)' },
  { value: 'Australia/Brisbane', label: '澳大利亚东部时间 (布里斯班)' },
  { value: 'Australia/Perth', label: '澳大利亚西部时间 (珀斯)' },
  { value: 'Australia/Adelaide', label: '澳大利亚中部时间 (阿德莱德)' },
  { value: 'Australia/Darwin', label: '澳大利亚中部时间 (达尔文)' },
  { value: 'Pacific/Auckland', label: '新西兰时间 (奥克兰)' },
  { value: 'Pacific/Fiji', label: '斐济时间' },
  { value: 'Pacific/Guam', label: '关岛时间' },
  { value: 'Pacific/Honolulu', label: '夏威夷时间 (檀香山)' },

  // 非洲地区
  { value: 'Africa/Cairo', label: '埃及时间 (开罗)' },
  { value: 'Africa/Johannesburg', label: '南非时间 (约翰内斯堡)' },
  { value: 'Africa/Casablanca', label: '摩洛哥时间 (卡萨布兰卡)' },
  { value: 'Africa/Lagos', label: '尼日利亚时间 (拉各斯)' },
  { value: 'Africa/Nairobi', label: '肯尼亚时间 (内罗毕)' },

  // 协调世界时
  { value: 'UTC', label: '协调世界时 (UTC)' },
  { value: 'GMT', label: '格林威治标准时间 (GMT)' }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initTimezones();
  initLunarDirection();
  initTimestampDirection();
  setTodayDate();
});

// 初始化 Tab 切换
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;

      // 移除所有 active 类
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      // 添加 active 类到当前选中的
      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// 初始化时区下拉框
function initTimezones() {
  const sourceSelect = document.getElementById('source-timezone');
  const targetSelect = document.getElementById('target-timezone');

  COMMON_TIMEZONES.forEach(tz => {
    const option1 = new Option(tz.label, tz.value);
    const option2 = new Option(tz.label, tz.value);
    sourceSelect.add(option1);
    targetSelect.add(option2);
  });

  // 设置默认值
  sourceSelect.value = 'Asia/Shanghai';
  targetSelect.value = 'America/New_York';
}

// 初始化时间戳转换方向
function initTimestampDirection() {
  const tsDirBtns = document.querySelectorAll('.ts-dir-btn');
  const tsLabel = document.getElementById('ts-input-label');

  tsDirBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tsDirBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const dir = btn.dataset.dir;
      if (dir === 'to-date') {
        tsLabel.innerHTML = '时间戳（秒）：<input type="text" id="ts-input" placeholder="例如：1640995200">';
      } else {
        tsLabel.innerHTML = '日期时间：<input type="text" id="ts-input" placeholder="格式：YYYY-MM-DD HH:MM:SS&#10;例如：2024-01-01 12:30:45">';
      }
    });
  });
}

// 初始化农历转换方向
function initLunarDirection() {
  const lunarDirBtns = document.querySelectorAll('.lunar-dir-btn');
  const solarPanel = document.getElementById('solar-to-lunar-panel');
  const lunarPanel = document.getElementById('lunar-to-solar-panel');

  lunarDirBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lunarDirBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const dir = btn.dataset.dir;
      if (dir === 'solar-to-lunar') {
        solarPanel.style.display = 'block';
        lunarPanel.style.display = 'none';
      } else {
        solarPanel.style.display = 'none';
        lunarPanel.style.display = 'block';
      }

      // 清空结果
      showResult('lunar-result', '');
    });
  });
}

// 设置今天日期
function setTodayDate() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('base-date').value = today;
  document.getElementById('lunar-date').value = today;
  document.getElementById('diff-start').value = today;

  // 设置默认的日期时间
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('timezone-datetime').value = `${year}-${month}-${day}T${hours}:${minutes}`;
}

// 显示结果
function showResult(elementId, text) {
  const resultEl = document.getElementById(elementId);
  resultEl.textContent = text;
  resultEl.style.color = '#606266';
}

// ==================== 1. 日期加减 ====================
function calculateDate() {
  const baseDateStr = document.getElementById('base-date').value;
  const days = parseInt(document.getElementById('days-offset').value) || 0;

  if (!baseDateStr) {
    showResult('date-calc-result', '请选择基准日期');
    return;
  }

  const baseDate = new Date(baseDateStr);
  const result = new Date(baseDate);
  result.setDate(result.getDate() + days);

  const resultStr = formatDate(result);
  const weekday = getWeekday(result);

  showResult('date-calc-result',
    `${baseDateStr} ${days >= 0 ? '+' : ''}${days}天 = ${resultStr} ${weekday}`);
}

// ==================== 2. 农历转换 ====================

// 国历转农历
function convertSolarToLunar() {
  const dateStr = document.getElementById('lunar-date').value;

  if (!dateStr) {
    showResult('lunar-result', '请选择日期');
    return;
  }

  const date = new Date(dateStr);

  if (typeof Lunar === 'undefined') {
    showResult('lunar-result', '农历库未加载，请确保 lunar.min.js 存在');
    return;
  }

  try {
    // 从公历转农历
    const lunar = Lunar.fromDate(date);
    const lunarYear = lunar.getYearInGanZhi();
    const lunarYearCN = lunar.getYearInChinese();
    const shengxiao = lunar.getShengxiao();
    const lunarMonth = lunar.getMonthInChinese();
    const lunarDay = lunar.getDayInChinese();
    const weekday = getWeekday(date);

    // 获取节气
    const jieQi = lunar.getJieQi();
    const jieQiStr = jieQi ? `\n节气：${jieQi}` : '';

    // 获取其他信息
    const ganZhiDay = lunar.getDayInGanZhi();
    const ganZhiMonth = lunar.getMonthInGanZhi();
    const ganZhiYear = lunar.getYearInGanZhi();
    const ganZhiTime = lunar.getTimeInGanZhi();

    // 获取星座
    const solar = Solar.fromDate(date);
    const xingZuo = solar.getXingZuo();

    // 获取生肖
    const shengXiao = lunar.getYearShengXiao();

    // 获取农历年份
    const lunarYearFull = `${lunarYearCN}年（${lunarYear} ${shengXiao}）`;

    const result = `📅 公历：${dateStr} ${weekday}
🌙 农历：${lunarYearFull} ${lunarMonth}月${lunarDay}日

📊 详细信息：
   年干支：${ganZhiYear}（${shengXiao}）
   月干支：${ganZhiMonth}
   日干支：${ganZhiDay}
   时干支：${ganZhiTime}
   星座：${xingZuo}${jieQiStr}`;

    showResult('lunar-result', result);
  } catch (e) {
    showResult('lunar-result', '转换失败：' + e.message);
  }
}

// 农历转国历
function convertLunarToSolar() {
  const year = parseInt(document.getElementById('lunar-year').value);
  const month = parseInt(document.getElementById('lunar-month').value);
  const day = parseInt(document.getElementById('lunar-day').value);
  const isLeap = document.getElementById('lunar-leap').checked;

  if (!year || !month || !day) {
    showResult('lunar-result', '请输入完整的农历年月日');
    return;
  }

  if (typeof Lunar === 'undefined') {
    showResult('lunar-result', '农历库未加载，请确保 lunar.min.js 存在');
    return;
  }

  try {
    // 从农历转公历
    const lunar = Lunar.fromYmd(year, month, day);
    const solar = lunar.getSolar();

    const solarDate = formatDate(new Date(solar.getYear(), solar.getMonth() - 1, solar.getDay()));
    const weekday = getWeekday(new Date(solar.getYear(), solar.getMonth() - 1, solar.getDay()));

    // 获取更多信息
    const lunarYearCN = lunar.getYearInChinese();
    const lunarYearGZ = lunar.getYearInGanZhi();
    const shengXiao = lunar.getYearShengXiao();
    const lunarMonthCN = lunar.getMonthInChinese();
    const lunarDayCN = lunar.getDayInChinese();

    const result = `🌙 农历：${lunarYearCN}年${lunarMonthCN}月${lunarDayCN}日
   （${lunarYearGZ} ${shengXiao}）

📅 对应公历：${solarDate} ${weekday}
   ${solar.getYear()}年${solar.getMonth()}月${solar.getDay()}日`;

    showResult('lunar-result', result);
  } catch (e) {
    showResult('lunar-result', '转换失败：' + e.message);
  }
}

// ==================== 3. 日期间隔 ====================
function calculateDiff() {
  const startStr = document.getElementById('diff-start').value;
  const endStr = document.getElementById('diff-end').value;

  if (!startStr || !endStr) {
    showResult('diff-result', '请选择开始和结束日期');
    return;
  }

  const start = new Date(startStr);
  const end = new Date(endStr);

  const diffTime = end - start;
  const diffDays = Math.abs(Math.floor(diffTime / (1000 * 60 * 60 * 24)));

  const weeks = Math.floor(diffDays / 7);
  const remainingDays = diffDays % 7;

  let result = `相差 ${diffDays} 天`;
  if (weeks > 0) {
    result += `（${weeks} 周 ${remainingDays} 天）`;
  }
  result += `\n相差小时数：${Math.abs(Math.floor(diffTime / (1000 * 60 * 60)))} 小时`;

  showResult('diff-result', result);
}

// ==================== 4. 时区转换 ====================
function convertTimezone() {
  const sourceTz = document.getElementById('source-timezone').value;
  const targetTz = document.getElementById('target-timezone').value;
  const inputStr = document.getElementById('timezone-datetime').value;

  if (!inputStr) {
    showResult('timezone-result', '请选择日期时间');
    return;
  }

  try {
    // 解析输入时间
    const [datePart, timePart] = inputStr.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);

    // 创建日期对象
    const date = new Date(year, month - 1, day, hour, minute);

    // 获取源时区时间字符串
    const sourceFormatter = new Intl.DateTimeFormat('zh-CN', {
      timeZone: sourceTz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    // 获取目标时区时间字符串
    const targetFormatter = new Intl.DateTimeFormat('zh-CN', {
      timeZone: targetTz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    // 格式化输出
    const sourceTime = sourceFormatter.format(date);
    const targetTime = targetFormatter.format(date);

    // 解析格式化后的时间
    const [sYear, sMonth, sDay, sHour, sMinute] = sourceTime.match(/\d+/g);
    const [tYear, tMonth, tDay, tHour, tMinute] = targetTime.match(/\d+/g);

    const sourceTimeStr = `${sYear}-${sMonth}-${sDay} ${sHour}:${sMinute}`;
    const targetTimeStr = `${tYear}-${tMonth}-${tDay} ${tHour}:${tMinute}`;

    showResult('timezone-result',
      `${sourceTz}: ${sourceTimeStr}\n→ ${targetTz}: ${targetTimeStr}`);
  } catch (e) {
    showResult('timezone-result', '转换失败：' + e.message);
  }
}

// ==================== 5. 时间戳转换 ====================
function convertTimestamp() {
  const dir = document.querySelector('.ts-dir-btn.active').dataset.dir;
  const isMs = document.getElementById('ts-ms').checked;
  const input = document.getElementById('ts-input').value.trim();

  if (!input) {
    showResult('timestamp-result', '请输入值');
    return;
  }

  try {
    if (dir === 'to-date') {
      // 时间戳转日期
      const timestamp = isMs ? BigInt(input) : BigInt(input) * 1000n;
      const date = new Date(Number(timestamp));

      const result = formatDate(date) + ' ' + formatTime(date) +
        '\n星期' + getWeekdayCN(date) +
        '\n本地时间: ' + date.toLocaleString('zh-CN');

      showResult('timestamp-result', result);
    } else {
      // 日期转时间戳
      // 支持格式: YYYY-MM-DD HH:MM:SS 或 YYYY-MM-DDTHH:MM:SS
      let date;

      // 尝试解析 YYYY-MM-DD HH:MM:SS 格式
      const parts = input.match(/^(\d{4})-(\d{2})-(\d{2})[\sT](\d{2}):(\d{2}):(\d{2})$/);

      if (parts) {
        const [, year, month, day, hour, minute, second] = parts;
        date = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(hour),
          parseInt(minute),
          parseInt(second)
        );
      } else if (input.includes('T')) {
        // datetime-local 格式或其他格式
        date = new Date(input);
      } else {
        // 尝试其他格式
        date = new Date(input);
      }

      if (isNaN(date.getTime())) {
        showResult('timestamp-result', '❌ 日期格式不正确\n\n请使用格式：YYYY-MM-DD HH:MM:SS\n例如：2024-01-01 12:30:45');
        return;
      }

      const timestamp = isMs ? date.getTime() : Math.floor(date.getTime() / 1000);
      const dateStr = formatDate(date) + ' ' + formatTime(date);
      const weekday = getWeekday(date);

      showResult('timestamp-result',
        `📅 ${dateStr} ${weekday}\n\n${isMs ? '⏱️ 毫秒' : '⏱️ 秒'}级时间戳: ${timestamp}`);
    }
  } catch (e) {
    showResult('timestamp-result', '❌ 转换失败：' + e.message);
  }
}

// 获取当前时间戳
function getCurrentTimestamp() {
  const isMs = document.getElementById('ts-ms').checked;
  const now = Date.now();
  const timestamp = isMs ? now : Math.floor(now / 1000);

  showResult('timestamp-result',
    `当前时间戳：${timestamp}\n${isMs ? '毫秒' : '秒'}级\n\n${new Date().toLocaleString('zh-CN')}`);

  // 如果是时间戳→日期模式，同时填充输入框
  const dir = document.querySelector('.ts-dir-btn.active').dataset.dir;
  if (dir === 'to-date') {
    document.getElementById('ts-input').value = timestamp;
  }
}

// ==================== 6. 时间段处理 ====================
function parseTimeLines(lines) {
  const results = [];
  const timeRegex = /^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})/;

  lines.forEach((line, index) => {
    const match = line.match(timeRegex);
    if (match) {
      const [, year, month, day, hour, minute, second] = match;
      const timeValue = parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);
      results.push({
        index,
        original: line,
        timeValue,
        hour,
        minute,
        second
      });
    }
  });

  return results;
}

function findEarliestTime() {
  const input = document.getElementById('time-input').value;
  const lines = input.trim().split('\n');
  const times = parseTimeLines(lines);

  if (times.length === 0) {
    showResult('time-output', '未找到有效的时间记录，请确保格式为：YYYY-MM-DD HH:MM:SS');
    return;
  }

  const minTime = Math.min(...times.map(t => t.timeValue));
  const results = times.filter(t => t.timeValue === minTime);

  const output = results.map(r => r.original).join('\n');
  const summary = `\n\n共 ${results.length} 条记录，最早时间: ${results[0].hour}:${results[0].minute}:${results[0].second}`;

  document.getElementById('time-output').value = output + summary;
}

function findLatestTime() {
  const input = document.getElementById('time-input').value;
  const lines = input.trim().split('\n');
  const times = parseTimeLines(lines);

  if (times.length === 0) {
    showResult('time-output', '未找到有效的时间记录，请确保格式为：YYYY-MM-DD HH:MM:SS');
    return;
  }

  const maxTime = Math.max(...times.map(t => t.timeValue));
  const results = times.filter(t => t.timeValue === maxTime);

  const output = results.map(r => r.original).join('\n');
  const summary = `\n\n共 ${results.length} 条记录，最晚时间: ${results[0].hour}:${results[0].minute}:${results[0].second}`;

  document.getElementById('time-output').value = output + summary;
}

function copyResult() {
  const output = document.getElementById('time-output').value;
  if (!output) {
    alert('没有可复制的内容');
    return;
  }

  if (window.utoolsAPI) {
    window.utoolsAPI.copyText(output);
    alert('已复制到剪贴板');
  } else {
    // 后备方案
    navigator.clipboard.writeText(output).then(() => {
      alert('已复制到剪贴板');
    }).catch(() => {
      alert('复制失败，请手动复制');
    });
  }
}

// ==================== 工具函数 ====================
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function getWeekday(date) {
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  return days[date.getDay()];
}

function getWeekdayCN(date) {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  return days[date.getDay()];
}
