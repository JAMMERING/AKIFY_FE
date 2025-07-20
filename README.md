<div align="center">

<img width="30%" alt="Image" src="https://github.com/user-attachments/assets/6c3689c0-538e-465a-b296-1251d0989453" />

</div>
<br>

## 👨‍👩‍👧‍👦 Authors

**잼머링 프론트엔드팀**

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/FreshSangchoo">
              <img src="https://avatars.githubusercontent.com/u/157272518?v=4" width="150" height="150" style="object-fit :contain">
              <br />
              <b>FreshSangchoo</b>
            </a> 
        </td>
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/pookey1104">
              <img src="https://avatars.githubusercontent.com/u/90364700?v=4" width="150" height="150" style="object-fit :contain">
              <br />
              <b>pookey1104</b>
            </a> 
        </td>
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/sooooa16">
              <img src="https://avatars.githubusercontent.com/u/156293624?v=4" width="150" height="150" style="object-fit :contain">
              <br />
              <b>sooooa16</b>
            </a> 
        </td>
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/Hwanggyuun">
              <img src="https://avatars.githubusercontent.com/u/171308308?v=4" width="150" height="150" style="object-fit :contain">
              <br />
              <b>Hwanggyuun</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            박영남
        </td>
        <td>
            김서윤
        </td>
        <td>
            이수아
        </td>
        <td>
            황규운
        </td>
    </tr>
</table>

<br>

## 🚀 Activity
![Alt](https://repobeats.axiom.co/api/embed/25a0518bb007ead7aca786f3c3d9fd78bfef985b.svg "Repobeats analytics image")

<details>
  <summary><h2>✅ Package Manager</h2></summary>
  <div markdown="1">

- **yarn 명령어 예시**

### React
```
yarn install # 전체 설치
yarn add 라이브러리 # 라이브러리 설치
yarn dev # 실행
```

### React Native
```
yarn install # 전체 설치
yarn add 라이브러리 # 라이브러리 설치
cd ios && pod install && cd .. # ios에 라이브러리 설치
yarn android # android 실행
yarn ios # ios 실행
```


  </div>
</details>

<details>
  <summary><h2>🔗 Git Convention</h2></summary>
  <div markdown="1">

### 💫 Git Flow

```
develop ← 작업 브랜치
```

- develop : 배포 및 전체 개발 브랜치(merge되는 브랜치) → 배포 브랜치
- 작업 브랜치: init, feat, fix, refactor

<br>

### 🔥 Commit Message Convention

- **커밋 유형**
  - 🎉 Init: 프로젝트 세팅
  - ✨ Feat: 새로운 기능 추가
  - 🐛 Fix : 버그 수정
  - 💄 Design : UI(CSS) 수정
  - ✏️ Typing Error : 오타 수정
  - 🚚 Mod : 폴더 구조 이동 및 파일 이름 수정
  - 💡 Add : 파일 추가 (ex- 이미지 추가)
  - 🔥 Del : 파일 삭제
  - ♻️ Refactor : 코드 리펙토링

- **형식**: `커밋유형: 상세설명 (#이슈번호)`
- **예시**:
  - 🎉 Init: 프로젝트 초기 세팅 (#1)
  - ✨ Feat: 메인페이지 개발 (#2)

<br>

### 🌿 Branch Convention

**Branch Naming 규칙**

- **브랜치 종류**
  - `init`: 프로젝트 세팅
  - `feat`: 새로운 기능 추가
  - `fix` : 버그 수정 / feat 머지 이후 수정 작업
  - `refactor` : 코드 리펙토링 / 배포 이후 간단한 수정 작업

- **형식**: `브랜치종류/#이슈번호/상세기능`
- **예시**:
  - init/#1/init
  - fix/#2/splash

<br>

### 📋 Issue Convention

**Issue Title 규칙**

- **태그 목록**:
  - `Init`: 프로젝트 세팅
  - `Feat`: 새로운 기능 추가
  - `Fix` : 버그 수정
  - `Refactor` : 코드 리펙토링

- **형식**: [태그] 작업 요약
- **예시**:
  - [Init] 프로젝트 초기 세팅
  - [Feat] Header 컴포넌트 구현

<br>

**Issue Template**

```
## 📄 About

해당 이슈에서 작업할 내용을 작성해주세요.

## ✅ To Do

해당 이슈와 관련된 할 일을 작성해주세요.
할 일을 완료했다면 체크 표시로 기록해주세요.

- [ ] todo
- [ ] todo

## 🎨 Preview

작업하고자 하는 내용의 뷰를 첨부해주세요.

```

<br>

### 🔄 Pull Request Convention

**PR Title 규칙**

- **태그 목록**:
  - `Init`: 프로젝트 세팅
  - `Feat`: 새로운 기능 추가
  - `Fix` : 버그 수정
  - `Refactor` : 코드 리펙토링

- **형식**: `[태그] 제목`
- **예시**:
  - [Feat] Header 컴포넌트 구현
  - [Fix] Header 컴포넌트 버그 수정

<br>

**PR Template**

```
### 📑 이슈 번호

- close #

### ✨️ 작업 내용

작업 내용을 간략히 설명해주세요.

### 💭 코멘트

코드 리뷰가 필요한 부분이나 궁금한 점을 자유롭게 남겨주세요!

### 📸 구현 결과

구현한 기능이 모두 결과물에 포함되도록 자유롭게 첨부해주세요 (스크린샷, gif, 동영상, 배포링크 등)
```

  </div>
</details>