# Roadmap Design Guide

Roadmap의 UI는 사람들이 목표까지 가는 길을 발견하고, 읽고, 토론하고, fork해서
자기 방식으로 발전시키는 커뮤니티 경험을 중심으로 만든다.

이 문서는 Refero Styles 같은 AI-readable design system 형식을 참고하되, 특정
브랜드나 서비스를 복제하지 않고 Roadmap에 맞는 제품 디자인 기준을 정의한다.

## Product Position

Roadmap은 SaaS dashboard가 아니다.

Roadmap은 content-first community다. 화면의 중심은 관리 지표나 업무 패널이
아니라 다른 사람들이 만든 roadmap, task 흐름, fork 계보, 댓글, 발견 경험이다.

## Design Principles

- Content first: roadmap 제목, 목표, task 흐름이 가장 먼저 읽혀야 한다.
- Community first: 작성자, 반응, 댓글, fork 신호가 자연스럽게 보여야 한다.
- Fork as creation: fork는 보조 기능이 아니라 새로운 roadmap을 만드는 핵심 행동이다.
- Calm density: 정보는 충분히 보여주되 dashboard처럼 빽빽하지 않게 유지한다.
- Clear lineage: 원본 출처와 파생 관계는 항상 이해 가능해야 한다.
- Mobile-ready reading: 긴 roadmap도 모바일에서 읽고 따라갈 수 있어야 한다.
- Performance-conscious UI: 이미지, 폰트, motion, interaction은 성능 budget 안에서만 사용한다.

## Visual Direction

Roadmap은 지식 커뮤니티와 계획 도구 사이의 감각을 가진다.

- 너무 corporate SaaS처럼 보이지 않는다.
- 너무 playful SNS처럼 흐트러지지 않는다.
- 문서, 카드, timeline, discussion이 균형 있게 섞인 느낌을 목표로 한다.
- primary surface는 밝고 읽기 쉬운 배경을 사용한다.
- accent color는 행동과 상태를 구분하는 데 쓰고, 화면 전체를 단일 hue로 덮지 않는다.

## Color Tokens

초기 token은 구현 중 조정할 수 있지만, 역할은 유지한다.

```text
background.page      #f6f7f2
background.surface   #ffffff
background.subtle    #f1f5f4
text.primary         #172033
text.secondary       #5f6b7a
text.muted           #8792a2
border.default       #dce3df
action.primary       #2563eb
action.fork          #0f766e
signal.popular       #b45309
signal.danger        #dc2626
focus.ring           #93c5fd
```

Usage:

- `action.primary`: create, publish, save 같은 주요 명령.
- `action.fork`: fork, lineage, derivative creation 관련 행동.
- `signal.popular`: popular, trending, highlighted metadata.
- `background.subtle`: category band, filter area, nested comment background.

## Typography

텍스트는 읽기 경험을 우선한다.

```text
font.family.ui       Pretendard, Noto Sans KR, system-ui, sans-serif
font.size.body       16px
font.size.small      14px
font.size.meta       13px
font.size.h1         32px
font.size.h2         24px
font.size.h3         18px
line.height.body     1.65
line.height.heading  1.25
letter.spacing       0
```

Rules:

- hero-scale type은 홈의 첫 화면처럼 진짜 첫 인상에만 쓴다.
- card 내부 heading은 compact하게 유지한다.
- roadmap task 설명은 긴 문장도 편하게 읽히도록 line-height를 넉넉히 둔다.
- font size를 viewport width에 따라 스케일하지 않는다.

## Spacing

```text
space.1  4px
space.2  8px
space.3  12px
space.4  16px
space.5  24px
space.6  32px
space.7  48px
space.8  64px
```

Rules:

- 반복 카드 간격은 16px 또는 24px을 기본으로 한다.
- roadmap detail의 task 간격은 scan이 쉬운 16px 이상을 유지한다.
- comment thread는 depth가 보이되 과한 indentation으로 모바일 폭을 잃지 않는다.

## Radius And Elevation

```text
radius.small   4px
radius.medium  8px
radius.large   12px
```

Rules:

- 일반 card와 panel은 8px 이하를 기본으로 한다.
- floating card를 섹션마다 남발하지 않는다.
- elevation은 hover, modal, popover처럼 계층이 필요한 곳에만 쓴다.

## Core Components

### Roadmap Card

Purpose:

- 목록과 홈에서 roadmap을 빠르게 비교하게 한다.

Required content:

- title
- topic/category
- goal summary
- author
- estimated duration
- task count
- like/comment/fork count
- original/fork badge when relevant

Behavior:

- card 전체는 detail로 이동한다.
- fork action은 icon button 또는 compact action으로 분리한다.
- metadata가 title보다 시각적으로 강해지지 않게 한다.

### Roadmap Task Timeline

Purpose:

- 목표까지 가는 순서와 완료 기준을 읽게 한다.

Required content:

- step number
- task title
- description
- estimated effort
- completion criteria

Behavior:

- 순서는 명확해야 한다.
- 긴 task도 layout shift 없이 읽혀야 한다.
- 모바일에서는 timeline 장식을 줄이고 content width를 우선한다.

### Fork Lineage

Purpose:

- 이 roadmap이 어디서 왔고 어디로 파생됐는지 이해하게 한다.

Required content:

- original roadmap
- current fork source
- fork count
- related forks

Behavior:

- attribution은 항상 보인다.
- lineage는 처음부터 복잡한 graph보다 readable chain/list로 시작한다.

### Comment Thread

Purpose:

- roadmap에 대한 질문, 개선 제안, 경험 공유를 담는다.

Rules:

- 댓글과 대댓글은 읽기 흐름이 우선이다.
- action은 reply, like, report 정도로 제한한다.
- nested depth는 MVP에서 1단계 대댓글까지만 권장한다.

### Create Roadmap Form

Purpose:

- 처음 쓰는 사용자도 목표, 단계, 완료 기준을 구조화하게 한다.

Required fields:

- title
- topic
- goal
- description
- tasks
- estimated duration
- visibility

Behavior:

- task 추가/삭제/정렬이 핵심 interaction이다.
- draft autosave는 MVP 이후 검토한다.
- publish 전 preview를 제공할 수 있도록 구조를 열어둔다.

## Page Patterns

### Home

First viewport:

- Roadmap이 무엇인지 즉시 이해되는 탐색형 첫 화면.
- 오늘의 인기 roadmap 또는 많이 fork된 roadmap을 실제 content로 보여준다.
- 단순 marketing hero로 끝나지 않는다.

Sections:

- trending roadmaps
- highly forked roadmaps
- recommended categories
- recent roadmaps

### Roadmap Detail

Priority:

1. title and goal
2. author and attribution
3. task timeline
4. social actions
5. comments
6. related forks

### Fork Flow

Priority:

1. show source attribution
2. copy roadmap into editable draft
3. let user modify tasks and goal
4. publish as independent roadmap

## Interaction

- Use icon buttons for compact tools such as fork, share, like, comment, edit, delete.
- Use text buttons for clear commands such as "로드맵 만들기" and "발행하기".
- Use tabs for switching detail views only when the content is genuinely distinct.
- Use filters and segmented controls for roadmap discovery modes.
- Use checkboxes or toggles for visibility and binary settings.
- Use drag handles for task ordering when implemented.

## Accessibility

- All interactive controls need visible focus.
- Color cannot be the only signal for status.
- Icon-only actions need accessible labels and tooltips when meaning is not obvious.
- Roadmap task order must be readable by screen readers.
- Text contrast should meet WCAG AA for normal text.

## Performance

- Avoid heavy landing-page animation in the MVP.
- Keep home cards lightweight and virtualize later only if lists become large.
- Prefer stable image dimensions to prevent layout shift.
- Keep initial JavaScript small; discovery pages should render quickly.
- React Query owns server cache and invalidation.
- Jotai atoms must stay small to avoid broad rerenders.

## Do

- Make the roadmap itself the visual hero.
- Show fork and attribution as first-class product concepts.
- Keep cards scannable and metadata quiet.
- Design empty states that invite creation.
- Design loading/error states for every server-driven surface.

## Do Not

- Do not make the MVP look like a SaaS analytics dashboard.
- Do not bury fork under a generic share menu.
- Do not copy any external design system's brand-specific colors or layout wholesale.
- Do not put server data into Jotai.
- Do not add decorative gradients or oversized cards that reduce content density.

