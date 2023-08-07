// ==UserScript==
// @script          ./sources/xcmfu.com.js
// ==/UserScript==

async function main() {
    console.verbose('书源测试开始');

    // 搜索
    let keyword = '都市';
    console.log(`搜索开始, 关键字: ${keyword}`);
    let searchResponse = await search(keyword);
    if (searchResponse.code != undefined && searchResponse.code != 0) {
        console.error(`搜索失败: ${searchResponse.message ?? '未知'}`);
        return;
    }
    let searchBookLength = searchResponse.data.data?.length;
    if (!(searchBookLength && searchBookLength > 0)) {
        console.error('搜索失败: 没有找到书籍');
        return;
    }
    console.log(`搜索结束, 找到${searchBookLength}本书, ${searchResponse.data.hasMore ? '有' : '没有'}更多`);

    // TODO 搜索下一页?

    // 详情
    let book = searchResponse.data.data[0];
    console.log(`详情开始, 书籍: ${JSON.stringify(book)}`);
    let detailResponse = await detail(book.id);
    if (detailResponse.code != undefined && detailResponse.code != 0) {
        console.error(`详情失败: ${detailResponse.message}`);
        return;
    }
    console.log(`详情结束, 书籍: ${JSON.stringify(detailResponse.data)}`);

    // 目录
    console.log(`目录开始`);
    let tocResponse = await toc(book.id);
    if (tocResponse.code != undefined && tocResponse.code != 0) {
        console.error(`目录失败: ${tocResponse.message}`);
        return;
    }
    let tocLength = tocResponse.data?.length;
    if (!(tocLength && tocLength > 0)) {
        console.error('目录失败: 没有找到书籍');
        return;
    }
    console.log(`目录结束, 找到${tocResponse.data.length}章节`);

    // 章节
    let firstChapter = tocResponse.data[0];
    console.log(`章节开始, 书籍: ${JSON.stringify(firstChapter)}`);
    let chapterResponse = await chapter(book.id, firstChapter.id);
    if (chapterResponse.code != undefined && chapterResponse.code != 0) {
        console.error(`章节失败: ${chapterResponse.message}`);
        return;
    }
    console.log(`章节结束, 内容: ${JSON.stringify(chapterResponse.data)}`);

    // 分类
    let cateArgs = [];
    let children = categories.data.children;
    while(children) {
        let child = children[0];
        cateArgs.push(child.value);
        children = child.children;
    }
    let categoryResponse = await category(cateArgs);
    if (categoryResponse.code != undefined && categoryResponse.code != 0) {
        console.error(`分类失败: ${categoryResponse.message ?? '未知'}`);
        return;
    }
    let categoryBookLength = categoryResponse.data.data?.length;
    if (!(categoryBookLength && categoryBookLength > 0)) {
        console.error('分类失败: 没有找到书籍');
        return;
    }
    console.log(`分类结束, 找到${categoryBookLength}本书, ${categoryResponse.data.hasMore ? '有' : '没有'}更多`);
    
    // TODO 分类下一页

    console.verbose('书源测试结束');
}

main();
