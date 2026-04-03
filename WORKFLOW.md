# LUCA 프로젝트 작업 워크플로우

LUCA 프로젝트를 회사 노트북과 집 데스크탑에서 번갈아 작업할 때 안전하게 사용하는 방법입니다.

핵심 원칙은 아래 4가지입니다.

1. 작업 시작 전에 항상 `git pull origin main`
2. 작업 종료 전에 항상 `git status` 확인 후 `commit` + `push`
3. 두 PC에서 동시에 같은 프로젝트를 수정하지 않기
4. OneDrive 동기화가 끝나기 전에 다른 PC에서 작업하지 않기

## 가장 짧은 사용법

작업 시작:

```bash
git pull origin main
```

작업 종료:

```bash
git status
git add .
git commit -m "작업 내용"
git push origin main
```

예시:

```bash
git commit -m "update mobile navigation"
```

## 회사 노트북에서 시작할 때

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
- `git pull origin main` 실행 시 오류가 없어야 함

## 회사 노트북에서 종료할 때

1. 수정 내용 저장
2. 변경 파일 확인
3. 커밋
4. GitHub로 푸시

```bash
git status
git add .
git commit -m "작업 내용"
git push origin main
```

`git push origin main` 이 성공한 뒤에 작업을 마칩니다.

## 집 데스크탑에서 시작할 때

회사 노트북과 같은 순서로 진행합니다.

```bash
git branch --show-current
git pull origin main
```

중요한 점은 작업을 시작하기 전에 반드시 최신 상태를 먼저 받는 것입니다.

## 집 데스크탑에서 종료할 때

회사 노트북과 동일하게 마무리합니다.

```bash
git status
git add .
git commit -m "작업 내용"
git push origin main
```

그 다음 OneDrive 동기화 완료 여부까지 확인합니다.

## 권장 작업 순서 예시

회사에서 시작:

```bash
git pull origin main
```

회사에서 종료:

```bash
git status
git add .
git commit -m "작업 내용"
git push origin main
```

집에서 시작:

```bash
git pull origin main
```

집에서 종료:

```bash
git status
git add .
git commit -m "작업 내용"
git push origin main
```

## OneDrive 사용 시 주의사항

- OneDrive가 동기화 중이면 잠시 기다린 뒤 작업합니다.
- 한 PC에서 작업을 끝낸 뒤에는 `git push origin main` 성공 여부를 먼저 확인합니다.
- 그 다음 OneDrive 아이콘이 동기화 완료 상태인지 확인합니다.
- OneDrive 동기화가 끝나기 전에 다른 PC에서 같은 폴더를 열지 않습니다.
- `.git` 폴더가 동기화 중일 때는 드물게 `index.lock` 같은 오류가 생길 수 있습니다.

## 충돌이 잘 생기는 상황

아래 상황은 피하는 것이 좋습니다.

- 회사 노트북에서 수정 후 `push` 없이 집 데스크탑에서 이어서 작업
- 집 데스크탑에서 `pull` 없이 바로 작업 시작
- `ko.html`, `vi.html`, `style.css`, `site-lite.js` 같은 공용 파일을 두 PC에서 따로 수정
- OneDrive 동기화가 끝나기 전에 다른 PC에서 같은 프로젝트 열기

## 작업 종료 전 체크리스트

아래 3가지만 확인하면 됩니다.

1. `git status` 로 이상한 변경이 없는지 확인
2. `git push origin main` 이 성공했는지 확인
3. OneDrive 동기화 완료 아이콘 확인

## 한 줄 요약

작업 시작 전에는 `git pull origin main`, 작업 종료 전에는 `git status` 확인 후 `commit` + `push`, 마지막으로 OneDrive 동기화 완료까지 확인합니다.
