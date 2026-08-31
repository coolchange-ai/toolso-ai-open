# Contributing to Toolso.AI

Thank you for contributing. Keep changes focused, disclose conflicts of interest, and do not include credentials or private data in issues, commits, screenshots, or logs.

## Before opening a pull request

1. Search existing issues and pull requests.
2. Create a focused branch from the latest `main`.
3. Install the package-manager version declared by `packageManager` and run:

   ```bash
   pnpm install --frozen-lockfile
   pnpm typecheck
   pnpm lint
   pnpm i18n:check
   pnpm build
   ```

4. Explain checks that could not be run. Existing failures are not a reason to omit the result.

## Tool submissions

Use the tool-submission issue form for an editorial request. A submission does not guarantee inclusion.

If a maintainer asks for a pull request, update `scripts/seed-tools.ts` consistently:

- Add one unique tool record with a canonical HTTPS URL and stable slug.
- Add at least one valid category relation and appropriate existing tags.
- Update documented and logged tool counts.
- Do not recreate or modify the removed `scripts/seed-tools-data.sql` file.
- Provide English and Chinese descriptions that are factual rather than promotional.
- Disclose whether you own, operate, represent, or are otherwise affiliated with the product.

The README `Related Projects` section is not a general submission directory. Third-party tools should use the tool-submission workflow.

Maintainers may reject listings for unverifiable claims, misleading branding, unsafe content, duplicate products, unavailable sites, or poor fit with the directory.

## Bug reports

Use the bug-report form and include a commit SHA, environment, reproduction steps, expected behavior, and sanitized logs. If a hosted deployment differs from this repository, identify the exact URL and visible difference without assuming both use the same revision.

## 中文说明

- 提交前请先搜索现有 Issue/PR，并基于最新 `main` 创建独立分支。
- 工具收录属于编辑审核请求，不保证一定收录；必须提供可验证链接并披露与产品的关系。
- 工具数据只修改 `scripts/seed-tools.ts`，同时维护分类、标签和数量，不要恢复已经删除的 SQL seed 文件。
- Bug 报告需要提供 commit SHA、环境、复现步骤和脱敏日志。
