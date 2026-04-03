# LUCA Project Workflow

LUCA 프로젝트를 회사 노트북과 집 데스크탑에서 번갈아 작업할 때 쓰는 간단한 작업 매뉴얼입니다.

기본 원칙은 4가지입니다.

1. 작업 시작 전에는 항상 `pull`
2. 작업 종료 전에는 항상 `commit` + `push`
3. 두 PC에서 동시에 같은 프로젝트를 열어두지 않기
4. OneDrive 동기화 중에는 바로 Git 작업하지 않기

## 기본 명령 순서

작업 시작 전:

```bash
git pull origin main
```

작업 종료 전:

```bash
git add .
git commit -m "작업 내용"
git push origin main
```

예시:

```bash
git commit -m "update mobile navigation"
```

## 회사 노트북 시작 전

1. OneDrive 동기화가 끝났는지 확인
2. LUCA 폴더 열기
3. 현재 브랜치 확인
4. 최신 코드 받기

```bash
git branch --show-current
git pull origin main
```

확인 기준:

- 브랜치는 `main`
- `git pull origin main` 에러가 없어야 함

## 회사 노트북 종료 전

1. 파일 저장
2. 변경 파일 확인
3. 커밋
4. GitHub로 푸시

```bash
git status
git add .
git commit -m "작업 내용"
git push origin main
```

push 성공 메시지를 확인한 뒤 종료합니다.

## 집 데스크탑 시작 전

회사 노트북과 완전히 같은 순서로 진행합니다.

```bash
git branch --show-current
git pull origin main
```

작업 시작 전에는 반드시 최신 상태를 먼저 받습니다.

## 집 데스크탑 종료 전

회사 노트북 종료 전과 완전히 같은 순서로 진행합니다.

```bash
git status
git add .
git commit -m "작업 내용"
git push origin main
```

## 가장 안전한 왕복 루틴

회사에서 시작:

```bash
git pull origin main
```

회사에서 끝낼 때:

```bash
git add .
git commit -m "작업 내용"
git push origin main
```

집에서 시작:

```bash
git pull origin main
```

집에서 끝낼 때:

```bash
git add .
git commit -m "작업 내용"
git push origin main
```

## OneDrive 주의사항

- OneDrive가 동기화 중이면 잠깐 기다렸다가 작업합니다.
- 한 PC에서 수정 후 다른 PC로 바로 넘어가기 전에 `push`가 끝났는지 확인합니다.
- OneDrive가 `.git` 파일을 잡고 있으면 `index.lock` 같은 오류가 날 수 있습니다.
- 파일 저장 직후 바로 PC를 끄지 말고 동기화 아이콘이 잠잠해졌는지 잠깐 확인합니다.

## 충돌이 자주 나는 상황

아래 상황은 피하는 것이 좋습니다.

- 회사 PC에서 수정 후 `push` 안 하고 집 PC에서 같은 파일 수정
- 집 PC에서 `pull` 없이 바로 작업 시작
- `ko.html`, `vi.html`, `style.css` 같은 공용 파일을 양쪽에서 따로 수정
- OneDrive 동기화가 끝나기 전에 다른 PC에서 같은 폴더 열기
- 한쪽 PC에서 편집기를 켜둔 채 다른 PC에서 먼저 작업 시작

## 초보자용 종료 점검

작업 끝나기 전에 아래 3가지만 확인하면 됩니다.

1. `git status`로 변경 확인
2. `git push origin main` 성공 확인
3. OneDrive 동기화 상태 확인

## 한 줄 요약

작업 시작 전에는 `pull`, 작업 끝날 때는 `commit` 후 `push`.

