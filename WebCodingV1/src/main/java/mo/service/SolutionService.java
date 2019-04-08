package mo.service;

import mo.entity.po.Solution;
import mo.entity.po.SourceCode;

public interface SolutionService {

    /**
     * 插入新Solution
     *
     * @param solution   解题实体
     * @param sourceCode 源代码实体
     * @return 是否插入成功
     */
    boolean insertIntoNewSolution(Solution solution, SourceCode sourceCode);
}